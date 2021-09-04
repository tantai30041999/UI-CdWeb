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
               
     }
    render() {
     
       
        return (
            <div className="py-3 px-4 space-y-3">
                <OperatePost dataFooter = {this.props.dataFooter} language={this.props.language}  updateComponent= {this.props.updateComponent}/>
                <ContentComment  updateComponent= {this.props.updateComponent} exitUpdateComponent = {this.props.exitUpdateComponent} dataFooter = {this.props.dataFooter}  language={this.props.language}/>
             
          </div>
        );
    }
}
export default FooterPost;