import React, { Component } from 'react';
import Favorites from './Favorites';
import ProfileOption from './ProfileOption';
import InfoFollow from './InfoFollow';
class ProfileContent extends Component {
    constructor(props) {
        super(props) 
        this.state  = {
          userInfo :  JSON.parse(localStorage.getItem('userInf')),
         
        }
    
    }


    render() {
        return (
            <div className="lg:w/8/12 flex-1 flex flex-col lg:items-start items-center"> 
              <h2 className="font-semibold lg:text-2xl text-lg mb-2"> {this.state.userInfo.displayName}</h2>
              <p className="lg:text-left mb-2 text-center  dark:text-gray-100"> </p>
            {/* <Favorites/> */}
            <ProfileOption language = {this.props.language}/>
            <InfoFollow/>
            </div>
        );
    }
}

export default ProfileContent;