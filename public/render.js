import {Data} from './data.js';

class Render {
    constructor(){

    }
successCallback(city) {
    var source = $('#weather-template').html();
    var template = Handlebars.compile(source);

    for (let i = 0; i < city.length; i++) {
        var newHTML = template(city[i]);
        $('.new-div').append(newHTML);
        
    }
}
}
export {Render};
