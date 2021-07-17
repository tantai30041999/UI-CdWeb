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
            data: [],
        }
    }
   async componentDidMount() {
        var data = this.props.dataFromParent;
    
     await   this.setState({ data })
    }
    // componentDidUpdate(preProps) {
    //     if (preProps.dataFromParent != this.props.dataFromParent) {
    //         this.setState({ data: this.props.dataFromParent })
    //     }
    // }
    render() {
        var uploadData = this.props.updatePost;
        var updateComponent = this.props.updateComponent;
        var exitUpdateComponent = this.props.exitUpdateComponent;
        var language = this.props.language;
        var listPost = [];
        var data = this.props.dataFromParent;
        // if(updateComponent == true) {
        //     data = this.props.dataFromParent;
        // }
        listPost = data.map(function (item, index) {
            return <Post key={index} dataPost={item} updateData ={uploadData} exitUpdateComponent={exitUpdateComponent} updateComponent={updateComponent} language ={language}/>
        })
        return (

            <div className="space-y-5 flex-shrink-0 lg:w-7/12">
                <CreatePost   updateAfterCreatePost={this.props.updateAfterCreatePost}  updateComponent={updateComponent} language = {this.props.language}/>
                {listPost}
                <Load />
                <PostHiden />
                <LoadHiden />


            </div>
        );
    }
}

export default LeftFeed;