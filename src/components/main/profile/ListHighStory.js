import React, { Component } from 'react';
import AddStory from './AddStory';
import CoverYourStory from './CoverYourStory';

class ListHighStory extends Component {
    render() {
        return (
            <div className="my-6 grid lg:grid-cols-5 grid-cols-3 gap-2 hover:text-yellow-700 uk-link-reset">
         
             <AddStory language = {this.props.language}/>
             <CoverYourStory/>
             <CoverYourStory/>
             <CoverYourStory/>
          </div>
        );
    }
}

export default ListHighStory;