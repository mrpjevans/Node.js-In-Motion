
var socket;

$(() => {
  
    socket = io.connect(); 
  
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
