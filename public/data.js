import {Render} from './render.js';

var renderPost = new Render;


class Data {
    constructor(commentID) {
        this.fetchedCity = []; //soon, will have to change to  _getFromLocalStorage();
        this.commentID = 0;
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
            text: comment,
            commid: this.commentID
        }
        
       city.comments.push(commObj);
       this.commentID += 1
       console.log(this.fetchedCity);
       renderPost.successCallback(this.fetchedCity)
    }

    //move this to remove.js
    removeWeatherBox(currentIcon){
        var clickedIcon = $(currentIcon).closest('.render-div');
        var id = clickedIcon.data().id;

        var box = this.getPostById(id);

        this.fetchedCity.splice(this.fetchedCity.indexOf(box), 1);
       // console.log(this.fetchedCity);
        clickedIcon.remove();


    }

    removeComment(currentComment){
       var boxId = $(currentComment).closest('.render-div').data().id;
       var getBox= this.getPostById(boxId);
       var boxIndex = this.fetchedCity.indexOf(getBox);

       var commentId = $(currentComment).closest('.comments-container').find('.comment-text').data().id; 
        
       this.fetchedCity[boxIndex].comments.splice(this.fetchedCity.indexOf(commentId), 1);
       console.log(this.fetchedCity);
        $(currentComment).closest('p').remove();
    }
}


export {Data};