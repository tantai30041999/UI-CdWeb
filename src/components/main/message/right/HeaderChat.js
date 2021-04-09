import React, { Component } from 'react';

class HeaderChat extends Component {
    render() {
        return (
            <div className="px-5 py-4 flex uk-flex-between">                        
               <a href="#" className="flex items-center space-x-3">
                 <div className="w-10 h-10 rounded-full relative flex-shrink-0">
                   <img src="assets/images/avatars/avatar-1.jpg" alt="" className="h-full rounded-full w-full" />
                   <span className="absolute bg-green-500 border-2 border-white bottom-0 h-3 m-0.5 right-0 rounded-full shadow-md w-3" />
                 </div>
                 <div className="flex-1 min-w-0 relative text-gray-500">
                   <h4 className="font-semibold text-black text-lg">Sindy Forest</h4>
                   <p className="font-semibold leading-3 text-green-500 text-sm">is online</p>
                 </div>
               </a>                        
               <a href="#" className="flex hover:text-red-400 items-center leading-8 space-x-2 text-red-500 font-medium"> 
                 <i className="uil-trash-alt" /> <span className="lg:block hidden"> Delete Conversation </span> 
               </a>
             </div>
        );
    }
}

export default HeaderChat;