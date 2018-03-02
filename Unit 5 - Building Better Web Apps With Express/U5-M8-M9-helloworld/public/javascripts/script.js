$(() => {

    // Populate the weather
    $.getJSON('/weather', (data) => {
        $('.mypanel-weather').html(`<img src="${data.current_observation.icon_url}"><p>${data.current_observation.weather}</p><p>${data.current_observation.temperature_string}</p>`);
    });

})
