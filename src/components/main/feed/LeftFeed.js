import React, { Component } from 'react';
import Load from '../Load';
import LoadHiden from '../LoadHiden';
import CreatePost from './left/CreatePost';
import Post from './left/Post';
import PostHiden from './left/PostHiden';
class LeftFeed extends Component {
    render() {
        return (

            <div className="space-y-5 flex-shrink-0 lg:w-7/12">
                <CreatePost/>
                <Post />
                <Post />
                <Post />
                     <Load />
                <PostHiden />
                     <LoadHiden />

            </div>
        );
    }
}

export default LeftFeed;