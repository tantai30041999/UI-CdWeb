import React, { Component } from 'react';
import ImageCover from './ImageCover';
import ImageRelative from './ImageRelative';
import ImageSmall from './ImageSmall';
class BodyPost extends Component {
    render() {
      var data = this.props.dataBody;
      var caption = data.caption;
      var images = data.images;
      
      function checkImages(images) {
             var size = images.length;
             if(size == 1) {
               return 
               <a href="assets/images/post/img9.jpg" className="col-span-2">
               <img src="assets/images/post/img9.jpg" alt="" className="rounded-md w-full lg:h-76 object-cover" />
             </a>
             }else {

             }
      }

        return (
            <div uk-lightbox>
              <div class="p-3 border-b dark:border-gray-700">
                {caption}

</div>
            <div className="grid grid-cols-2 gap-2 p-2">
              <ImageCover/>
              <ImageSmall/>
              <ImageRelative/>
           
          
           
            </div>
          </div>
        );
    }
}

export default BodyPost;