import React, { Component } from 'react';
import ItemComment from './ItemComment';

class ContentComment extends Component {
    render() {
        return (
            <div className="border-t pt-4 space-y-4 dark:border-gray-600">
              <ItemComment/>
              <ItemComment/>
          </div>
        );
    }
}

export default ContentComment;