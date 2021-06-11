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
    // componentDidMount () {
    //     var dataPost = ;
    //     console.log(dataPost)
    //     this.setState({dataPost})
    // }
  
    render() {
        
     
       
        var uploadData  =  this.props.updatePost;
        var data = this.props.dataFromParent ;
        var listPost = [];
        listPost = data.map(function(item, index) {
                 return <Post key={index} dataPost={item}  updateData = {uploadData}/>
        })  


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