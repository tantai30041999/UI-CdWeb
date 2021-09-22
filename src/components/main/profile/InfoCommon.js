import React, { Component } from 'react';
import ProfileContent from './ProfileContent';
import ProfileImage from './ProfileImage';

class InfoCommon extends Component {
    render() {
        return (
            <div className="flex lg:flex-row flex-col items-center lg:py-8 lg:space-x-8">
              <ProfileImage/> 
              <ProfileContent language = {this.props.language}/>
            <div className="w-20" />
          </div>
        );
    }
}

export default InfoCommon;