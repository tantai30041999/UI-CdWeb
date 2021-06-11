import React, { Component } from 'react';
import Load from '../Load';
import LoadHiden from '../LoadHiden';
import CreatePost from './left/CreatePost';
// import EditPost from './left/EditPost';
import Post from './left/Post';
import PostHiden from './left/PostHiden';
class LeftFeed extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data :[],
        }  
    }
    componentDidMount () {
        var data =  this.props.dataFromParent;
        this.setState({data})
    }
  componentDidUpdate(preProps) {
      if(preProps.dataFromParent != this.props.dataFromParent) {
          this.setState({data : this.props.dataFromParent})
      }
  }
    render() {
        
     
       
        var uploadData  =  this.props.updatePost;
        // var data = this.state.data ;
    
        var listPost = [];
    
        listPost = this.state.data.map(function(item, index) {
                 return <Post key={index} dataPost={item}  updateData = {uploadData}/>
        })
        console.log("Left-List"); 
        console.log(listPost) ;


        return (

            <div className="space-y-5 flex-shrink-0 lg:w-7/12">
                <CreatePost loadPost={uploadData}/>
            
                 {listPost}  

                <Load />
                <PostHiden />
                <LoadHiden />

            </div>
        );
    }
}

export default LeftFeed;