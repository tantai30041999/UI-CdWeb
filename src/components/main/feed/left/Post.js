import React, { Component } from 'react';
import BodyPost from './BodyPost';
import FooterPost from './FooterPost';
import HeaderPost from './HeaderPost';

class Post extends Component {
  constructor(props) {
    super(props)
      this.state  = {
        updateImage : false,
      }
  }

  render() {
    var data = this.props.dataPost;
    var updateComponent = this.props.updateComponent;
    var updateData = this.props.updateData;
  
    return (
     

      <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
         <HeaderPost dataHeader= {data} updateData = {updateData} />
         <BodyPost dataBody ={data} updateComponent= {updateComponent}/>
         <FooterPost dataFooter ={data}/>
      </div>
    );


  }
}

export default Post;