

class WeatherApi {

    constructor(){}
    fetch(cityInput) {
        return $.ajax({
            method: "GET",
            url: "http://api.apixu.com/v1/current.json?key=cd97d616d7d54aba9f2122557180205&q=" + cityInput,
        });
    }
    
}

export{WeatherApi}