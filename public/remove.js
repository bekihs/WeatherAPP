/*import {Data} from './data.js';

var removeData = new Data;
class Remove{
    constructor(){

    }
    removeWeatherBox(currentIcon){
        var clickedIcon = $(currentIcon).closest('.render-div');
        var id = clickedIcon.data().id;

        var box = removeData.getPostById(id);

        removeData.fetchedCity.splice(removeData.fetchedCity.indexOf(box), 1);
        console.log(removeData.fetchedCity);
        clickedIcon.remove();


    }
}



export {Remove} */