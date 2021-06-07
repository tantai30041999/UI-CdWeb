import React, { Component } from 'react';
import BodyPost from './BodyPost';
import FooterPost from './FooterPost';
import HeaderPost from './HeaderPost';

class Post extends Component {
  render() {
    var data = this.props.dataPost;
    var dataHeader =  data.postedBy.displayName;
    var dataBody = data;
 
    return (
     

      <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
         <HeaderPost dataHeader= {dataHeader}/>
         <BodyPost dataBody ={dataBody}/>
         <FooterPost/>
      </div>
    );


  }
}

export default Post;