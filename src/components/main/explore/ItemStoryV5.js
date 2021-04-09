import React, { Component } from 'react';

class ItemStoryV5 extends Component {
    render() {
        return (
            <div>
                <div className="bg-green-400 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden uk-transition-toggle shadow-sm"> 
            <a href="#story-modal" uk-toggle>
              <img src="assets/images/post/img6.jpg" className="w-full h-full absolute object-cover inset-0" />
            </a>
            <a href="#story-modal" uk-toggle className="absolute flex h-full items-center justify-center w-8 w-full uk-transition-scale-up bg-black bg-opacity-10"> 
              <img src="assets/images/icon-play.svg" alt="" className="w-16 h-16" />
            </a>
            <div className="absolut absolute bottom-0 flex items-center justify-between px-4 py-3 space-x-2 text-white w-full custom-overly1">   
              <a href="#">James</a>  
              <div className="flex space-x-3">  
                <a href="#" className="flex items-center"> <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" />  150 </a>
                <a href="#" className="flex items-center"> <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses" /> 30 </a>         
              </div>        
            </div>
          </div>
            </div>
          
        );
    }
}

export default ItemStoryV5;