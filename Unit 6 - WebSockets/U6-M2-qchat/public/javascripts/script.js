
var socket;

// Connect socket when the document has loaded
$(() => {

    socket = io.connect(); 
  
    // On receiving a status change message, update the relevant user's status
    socket.on('update', (data) => {
        console.log(data);
        $('textarea').append(`${data.handle}: ${data.update}` + "\r\n");
    });

});

// Send an update
function sendUpdate() {

    const handle = $('INPUT[name=handle]').val();
    const update = $('INPUT[name=update]').val();
    const payload = {'handle': handle, 'update': update};
    socket.emit('update', payload);
    $('INPUT[name=update]').val('');

    return false;
    
}
