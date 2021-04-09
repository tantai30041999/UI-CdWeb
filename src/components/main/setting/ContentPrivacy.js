import React, { Component } from 'react';
import PrivacyLine from './PrivacyLine';

class ContentPrivacy extends Component {
    render() {
        return (
            <div className="bg-white rounded-md lg:shadow-lg shadow lg:p-6 p-4 col-span-2">
            <div className="space-y-3">
             
             <PrivacyLine/>

              <hr />
              <PrivacyLine/>
              <hr />
              <PrivacyLine/>
              <hr />
              <PrivacyLine/>
            </div>
          </div>
        );
    }
}

export default ContentPrivacy;