
var socket;

$(() => {
  
    socket = io.connect(); 
  
    $('li.set-status a').on('click', (e) => {
        // Get the newly selected status and update my panel
        const newStatus = $(e.target).html();
        const id = $('#myStatus').attr('data-userid');
        $('#myStatus').html(newStatus);
        // Emit the new status to the server
        var payload = {'id': id, 'status': newStatus};
        socket.emit('statusChange', payload);
    });

    // On receiving a status change message, update the relevant user's status
    socket.on('statusChange', (data) => {
        $('span[data-userid=' + data.id + ']').html(data.status);
    });

    // On receiving a time broadcast, update the clock and date
    socket.on('time', (data) => {
        $('.mypanel-clock').html(data.time);
        $('.date-date').html(data.date);
        $('.date-month').html(data.month);
    });

    // Populate the weather
    $.getJSON('/weather', (data) => {
        $('.mypanel-weather').html(`<p>${data.weather[0].main}</p><p>${data.main.temp}C</p>`);
    });

})
