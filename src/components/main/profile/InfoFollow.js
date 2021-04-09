import React, { Component } from 'react';

class InfoFollow extends Component {
    render() {
        return (
            <div className="divide-gray-300 divide-transparent divide-x grid grid-cols-3 lg:text-left lg:text-lg mt-3 text-center w-full dark:text-gray-100">
                <div className="flex lg:flex-row flex-col"> 120k <strong className="lg:pl-2">Posts</strong></div>
                <div className="lg:pl-4 flex lg:flex-row flex-col"> 420k <strong className="lg:pl-2">Followers</strong></div>
                <div className="lg:pl-4 flex lg:flex-row flex-col"> 530k <strong className="lg:pl-2">Following</strong></div>
              </div>
        );
    }
}

export default InfoFollow;