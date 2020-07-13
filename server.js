// the HTML file is in the htdocs folder

const io = require('socket.io')(4900)

io.on('connection', socket =>{
    socket.on('send-chat-message', message => {
        // console.log("CHAT:", message)
        socket.broadcast.emit('chat-message', message)
    })
});