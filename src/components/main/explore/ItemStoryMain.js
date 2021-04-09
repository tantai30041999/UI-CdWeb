import React, { Component } from 'react';

class ItemStoryMain extends Component {
    render() {
        return (
            <div className="bg-pink-400 h-full max-w-full overflow-hidden relative rounded-md uk-transition-toggle shadow-sm"> 
            <a href="#story-modal" uk-toggle>
              <img src="assets/images/post/img2.jpg" className="w-full h-full absolute object-cover inset-0 transform scale-125" />
            </a>
            <div className="absolut absolute bottom-0 p-6 space-y-2 text-white w-full custom-overly1 uk-light lg:block hidden">   
              <div className="flex flex-1 items-center space-x-2">
                <a href="#" className="flex items-center">
                  <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full transform -rotate-2 hover:rotate-3 transition hover:scale-105 m-0.5 mr-2">
                    <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 border border-white rounded-full w-8" />
                  </div>
                  Monroe Parker  
                </a>
                <div className="flex space-x-3">
                  <a href="#" className="flex items-center">
                    <ion-icon name="heart" className="mr-1 md hydrated" role="img" aria-label="heart" /> 150
                  </a>
                  <a href="#" className="flex items-center">
                    <ion-icon name="chatbubble-ellipses" className="mr-1 md hydrated" role="img" aria-label="chatbubble ellipses">
                    </ion-icon> 30
                  </a>
                </div>
              </div>
              <h1 className="font-bold text-3xl"> Lorem ipsum dolor sit amet consectetuer adipiscing</h1>
              <p> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet 
                doming id quod mazim placerat facer possim </p>
            </div>
          </div>
        );
    }
}

export default ItemStoryMain;