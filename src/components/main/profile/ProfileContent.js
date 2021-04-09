import React, { Component } from 'react';
import Favorites from './Favorites';
import ProfileOption from './ProfileOption';
import InfoFollow from './InfoFollow';
class ProfileContent extends Component {
    render() {
        return (
            <div className="lg:w/8/12 flex-1 flex flex-col lg:items-start items-center"> 
              <h2 className="font-semibold lg:text-2xl text-lg mb-2"> Stella Jonathan</h2>
              <p className="lg:text-left mb-2 text-center  dark:text-gray-100"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet 
                doming id quod mazim placerat facer possim assum</p>
            <Favorites/>
            <ProfileOption/>
            <InfoFollow/>
            </div>
        );
    }
}

export default ProfileContent;