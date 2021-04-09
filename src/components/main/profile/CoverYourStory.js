import React, { Component } from 'react';

class CoverYourStory extends Component {
    render() {
        return (
            <a href="#story-modal" uk-toggle>
            <img src="assets/images/post/img2.jpg" alt="" className="w-full lg:h-60 h-40 rounded-md object-cover" />
          </a>
        );
    }
}

export default CoverYourStory;