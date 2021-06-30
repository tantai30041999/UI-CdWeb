import React, { Component } from 'react';
import BodyPost from './BodyPost';
import FooterPost from './FooterPost';
import HeaderPost from './HeaderPost';

class Post extends Component {
  constructor(props) {
    super(props)
      this.state  = {
      
      }
  }

  render() {
    var data = this.props.dataPost;
    var updateComponent = this.props.updateComponent;
    var exitUpdateComponent = this.props.exitUpdateComponent;
    var updateData = this.props.updateData;
  
    return (
     

      <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
         <HeaderPost dataHeader= {data} updateData = {updateData} language = {this.props.language}/>
         <BodyPost dataBody ={data} updateComponent= {updateComponent} exitUpdateComponent = {exitUpdateComponent}/>
         <FooterPost dataFooter ={data} language = {this.props.language}  updateComponent= {updateComponent} exitUpdateComponent = {exitUpdateComponent}/>
      </div>
    );


  }
}

export default Post;