import React, { Component } from 'react';
import ImageCover from './ImageCover';
import ImageRelative from './ImageRelative';
import ImageSmall from './ImageSmall';

import ImageCarousel from './ImageCarousel';
class BodyPost extends Component {
 
    render() { 
      var updateComponent = this.props.updateComponent;
      var exitUpdateComponent = this.props.exitUpdateComponent;
      // var image = ;
      // var images_Post = showImage(images);
      
      
      // function showImage(listImage) {
      //     var l_image = listImage.length;
      //     var imageViews = [];
      //     imageViews.push)
      //     //  for(var i = 1; i < l_image; i++) {
      //     //    if(i < 3) {
      //     //     imageViews.push(<ImageSmall key={i} idImage={listImage[i]}/>)
      //     //    }else {
      //     //     imageViews.push(<ImageRelative key={i} idImage={listImage[i]}/>)
      //     //    }
      //     //  }
      //      return imageViews;
      // }


        return (
         
            <div uk-lightbox>
              <div class="p-3 border-b dark:border-gray-700">
                {this.props.dataBody.caption}
</div>

            <div className="grid grid-cols-2 gap-2 p-2">
            
            <ImageCover updateComponent={updateComponent} exitUpdateComponent ={exitUpdateComponent} idImage = {this.props.dataBody.images[0]} />
             {/* <ImageCarousel/> */}

     
        
            
            </div>
          </div>
        );
    }
}

export default BodyPost;