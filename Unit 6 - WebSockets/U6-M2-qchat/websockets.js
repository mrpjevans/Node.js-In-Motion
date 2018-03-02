
module.exports = (server) => {

    // Create a socket instance
    var io = require('socket.io')(server);
    
    // Set up events
    io.on('connection', (socket) => {
        
        // Handle an incoming status change
        socket.on('update', function (data) {
            
            // Broadcast to everyone (including self)
            console.log(data);
            io.emit('update', data);
            
        });

    });

};
