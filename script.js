const socket = io("http://localhost:1234");

socket.on('socket-message', data=>{
    console.log(data);
})