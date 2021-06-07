import React, { Component } from 'react';
import ImageCover from './ImageCover';
import ImageRelative from './ImageRelative';
import ImageSmall from './ImageSmall';
class BodyPost extends Component {
    render() {
      var data = this.props.dataBody;
      var caption = data.caption;
      var images = data.images;
      var images_Post = showImage(images);
      function showImage(listImage) {
          var l_image = listImage.length;
          var imageViews = [];
          imageViews.push(<ImageCover key={0} idImage={listImage[0]}/>)
           for(var i = 1; i < l_image; i++) {
             if(i < 3) {
              imageViews.push(<ImageSmall key={i} idImage={listImage[i]}/>)
             }else {
              imageViews.push(<ImageRelative key={i} idImage={listImage[i]}/>)
             }
           }
           return imageViews;
      }
  
        return (
            <div uk-lightbox>
              <div class="p-3 border-b dark:border-gray-700">
                {caption}
</div>
            <div className="grid grid-cols-2 gap-2 p-2">
              {/* <ImageCover/>
              <ImageSmall/>
              <ImageRelative/> */}
              {images_Post}
            </div>
          </div>
        );
    }
}

export default BodyPost;