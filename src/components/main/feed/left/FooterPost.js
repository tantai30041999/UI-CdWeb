import React, { Component } from 'react';
import ContentComment from './ContentComment';
import OperatePost from './OperatePost';


class FooterPost extends Component {
     constructor(props) {
         super(props)
         this.state = {
    
         }

     }
     componentDidMount() {
         var data = this.props.dataFooter;
         var postId = data.id;
         var userId = data.postedBy.id;          
     }
    render() {
     
       
        return (
            <div className="py-3 px-4 space-y-3">
                <OperatePost dataFooter = {this.props.dataFooter}/>
                <ContentComment dataFooter = {this.props.dataFooter}/>
             
          </div>
        );
    }
}
export default FooterPost;