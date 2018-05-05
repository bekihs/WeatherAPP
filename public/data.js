import {Render} from './render.js';

var renderPost = new Render;


class Data {
    constructor() {
        this.fetchedCity = []; //soon, will have to change to  _getFromLocalStorage();
    }


    getPostById(id){
        for (var i = 0; i < this.fetchedCity.length; i += 1) {
            if (this.fetchedCity[i].cityId === id) {
              return this.fetchedCity[i];
            }
          }
        }
    
    addCitytoArray(cityInfo) {
        $('.new-div').empty();

        this.fetchedCity.push(cityInfo);
        renderPost.successCallback(this.fetchedCity) //this will render to page
        
    }
   
    createCommentObj(comment, postId) {
        $('.new-div').empty();
        var city = this.getPostById(postId)
        var commObj = {
            text: comment
        }
       city.comments.push(commObj);
       //console.log(this.fetchedCity);
       renderPost.successCallback(this.fetchedCity)
    }

    removeWeatherBox(currentIcon){
        var clickedIcon = $(currentIcon).closest('.render-div');
        var id = clickedIcon.data().id;

        var box = this.getPostById(id);

        this.fetchedCity.splice(this.fetchedCity.indexOf(box), 1);
       // console.log(this.fetchedCity);
        clickedIcon.remove();


    }
}


export {Data};