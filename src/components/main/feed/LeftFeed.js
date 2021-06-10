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
             
        }
    
      
    }


   
    render() {
        var dataPost   = [];
        dataPost  =  this.props.dataFromParent;
        var updatePost = this.props.updatePost();
        const listPost = dataPost.map(function(item, index) {
                 return <Post key={index} dataPost={item} loadPostFeed ={updatePost} />
        })  


        return (

            <div className="space-y-5 flex-shrink-0 lg:w-7/12">
                <CreatePost loadPost={this.props.updatePost}/>
            
                 {listPost}  

                <Load />
                <PostHiden />
                <LoadHiden />

            </div>
        );
    }
}

export default LeftFeed;