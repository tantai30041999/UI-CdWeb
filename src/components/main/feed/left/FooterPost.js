import React, { Component } from 'react';
import ContentComment from './ContentComment';
import InforPost from './InforPost';
import OperatePost from './OperatePost';
import RepPost from './RepPost';

class FooterPost extends Component {
    render() {
        return (
            <div className="py-3 px-4 space-y-3">
                <OperatePost/>
                <InforPost/>
                <ContentComment/>
                <RepPost/>
          </div>
        );
    }
}
export default FooterPost;