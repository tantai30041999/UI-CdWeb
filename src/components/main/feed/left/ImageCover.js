import React, { Component } from 'react';

class ImageCover extends Component {
    render() {
        return (

            <a href="assets/images/post/img9.jpg" className="col-span-2">
                <img src="assets/images/post/img9.jpg" alt="" className="rounded-md w-full lg:h-76 object-cover" />
            </a>

        );
    }
}

export default ImageCover;