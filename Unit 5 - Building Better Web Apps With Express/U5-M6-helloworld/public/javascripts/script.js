
$(() => {

    // Populate the weather
    $.getJSON('/weather', (data) => {
        $('.mypanel-weather').html(`<p>${data.weather[0].main}</p><p>${data.main.temp}C</p>`);
    });

})
