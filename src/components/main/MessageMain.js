import React, { Component } from 'react';
import LeftMessage from './message/LeftMessage';
import RightMessage from './message/RightMessage';
import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
class MessageMain extends Component {
    render() {
    
            return (

               <div id="wrapper">
                 <SlideBar/>
                 <div  className="main_content">
                   <Header/>
                <div className="container m-auto pt-5">
                  <h1 className="font-semibold lg:mb-6 mb-3 text-2xl"> Messages</h1>
                  <div className="lg:flex lg:shadow lg:bg-white lg:space-y-0 space-y-8 rounded-md lg:-mx-0 -mx-5 overflow-hidden lg:dark:bg-gray-800">
                    {/*Left message*/}
                    <LeftMessage/>
                     {/*Right message*/}
                     <RightMessage/>
                  </div>
                  </div>
                </div>
                </div>
              );
        
    }
}

export default MessageMain;