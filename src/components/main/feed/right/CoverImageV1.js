import React, { Component } from 'react';

class CoverImageV1 extends Component {
    render() {
        return (
            <div className="bg-red-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle"> 
                  <a href="#story-modal" uk-toggle>
                    <img src="assets/images/post/img2.jpg" className="w-full h-full absolute object-cover inset-0" />
                  </a>
                  <div className="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">   
                    <a href="#"> <i className="uil-heart" /> 150 </a>
                    <a href="#"> <i className="uil-com" /> 30 </a>
                  </div>
                </div>
        );
    }
}

export default CoverImageV1;