import {Data} from './data.js';
import {WeatherApi} from './weatherapi.js';
import {Render} from './render.js';

var newCity = new Data()
var fecthedData = new WeatherApi();
var renderPage = new Render();
// render from local storage on page reload
var cities = newCity.fetchedCity;
renderPage.successCallback(cities);

$('.get-city-form').on('click', '.get-data', function () {
        var cityInput = $(this).parent().prev().val();

        $('.search-weather').val('');
        fecthedData.fetch(cityInput)
            .then(function (data) {
                var cityInfo = {
                    name: data.location.name,
                    country: data.location.country,
                    tempF: data.current.temp_f,
                    tempC: data.current.temp_c,
                    condition: data.current.condition.text,
                    time: data.location.localtime.substring(16, 10),
                    date: data.location.localtime.substring(0, 10),
                    cityId: data.location.localtime_epoch,
                    icon: data.current.condition.icon,
                    comments: []
                };
                newCity.addCitytoArray(cityInfo);
               
            })
            .catch(function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                alert('!ERROR! Invalid request, check your input and try again');
            });
    
        });




$('.new-div').on('click', '.submit-comment', function () {
            var commInput = $(this).parent().prev().val();
            var postId = $(this).closest('.render-div').data().id;
            newCity.createCommentObj(commInput, postId);
            $('.enter-comment').val('');
});


$('.new-div').on('click', '.fa-window-close', function(){
    newCity.removeWeatherBox(this);
});


$('.new-div').on('click', '.fa-trash', function(){
    newCity.removeComment(this);
});