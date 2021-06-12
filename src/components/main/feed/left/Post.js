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
    var dataHeader =  data;
    var dataBody =  this.props.dataPost; 
    return (
     

      <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
         <HeaderPost dataHeader= {dataHeader} updateData = {updateData} />
         <BodyPost dataBody ={dataBody} updateComponent= {updateComponent}/>
         <FooterPost/>
      </div>
    );


  }
}

export default Post;