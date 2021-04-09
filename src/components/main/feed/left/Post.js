import React, { Component } from 'react';
import BodyPost from './BodyPost';
import FooterPost from './FooterPost';
import HeaderPost from './HeaderPost';

class Post extends Component {
  render() {

    return (
      <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
         <HeaderPost/>
         <BodyPost/>
         <FooterPost/>
      </div>
    );


  }
}

export default Post;