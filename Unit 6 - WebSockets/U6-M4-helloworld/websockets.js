
const db = require('./models');

module.exports = (server) => {

    // Create a socket instance
    var io = require('socket.io')(server);

    // Set up events
    io.on('connection', (socket) => {
    
        // Handle an incoming status change
        socket.on('statusChange', function (data) {
            
            // Update the user's status in the db
            db.Users.update(
                {status: data.status},
                {where: {id: data.id}}
            ).then(() => {
                // Tell any connected clients (except this one) about the status change
                socket.broadcast.emit('statusChange', data);
            });
    
        });

    });

    // Our broadcast clock
    setInterval(() => {

        // Get date information
        const now = new Date();
        const h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        m = padTime(m);
        s = padTime(s);
        
        const d = now.getDate();
        const month = ['January', 'February', 'March', 'April', 'May', 'June',' July', 'August', 'September', 'October', 'November', 'December'];
        const n = month[now.getMonth()];
    
        // Build a JSON payload with the time and date
        const payload = {time: h + ':' + m + ':' + s, date: d, month: n};

        // Send to all sockets
        io.sockets.emit('time', payload);

    }, 500);
    
    // Add a 0 to the front of anything < 10
    function padTime(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }

};
