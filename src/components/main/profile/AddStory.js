import React, { Component } from 'react';

class AddStory extends Component {
    render() {
        return (
            <a href="#">
            <div className="bg-gray-100 border-4 border-dashed flex flex-col h-full items-center justify-center relative rounded-2xl w-full"> 
              <i className="text-4xl uil-plus-circle" /> <span> {this.props.language.addNew}</span>
            </div>
          </a>
        );
    }
}

export default AddStory;