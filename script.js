const socket = io("http://72.201.15.26:4900");
const messageForm = document.getElementById('message-form');
const messageContainer = document.getElementById('message-container')
const messageInput = document.getElementById('message-input');
//const name = document.getElementById('myName').value;
const name = window. prompt("Enter your name: ");
document.getElementById("name").innerHTML = name + "'s chat window";

function addMessage(message){
    if(message.name == name){
        c = 'me';
    }
    else{
        c = 'not-me';
    }
    messageDiv = document.createElement('div');
    messageElement = document.createElement('div');
    messageElement.setAttribute('class', c);
    messageElement.appendChild(document.createTextNode(message.name +": "+ message.message));
    messageDiv.appendChild(messageElement);

    messageContainer.appendChild(messageDiv);
}

socket.on('chat-message', data=>{
    //console.log(data);
    addMessage(data)
})

messageForm.addEventListener('submit', e =>{
    e.preventDefault()
    const message = {'message': messageInput.value, 'name': name}
    messageInput.value = ''
    socket.emit('send-chat-message', message)
    addMessage(message)
    
})