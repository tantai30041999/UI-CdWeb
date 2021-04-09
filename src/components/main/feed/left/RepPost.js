import React, { Component } from 'react';

class RepPost extends Component {
    render() {
        return (
            <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
            <input type="text" placeholder="Add your Comment.." className="bg-transparent max-h-10 shadow-none" />
            <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
              <a href="#"> <i className="uil-image" /></a>
              <a href="#"> <i className="uil-video" /></a>
            </div>
          </div>
        );
    }
}

export default RepPost;