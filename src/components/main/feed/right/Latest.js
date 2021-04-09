import React, { Component } from 'react';
import CoverImageV1 from './CoverImageV1';
import CoverImageV2 from './CoverImageV2';

class Latest extends Component {
    render() {
        return (
            <div className="mt-5" uk-sticky="offset:28; bottom:true ; media @m">
            <div className="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:bg-gray-800 dark:border-gray-700">
                <h2 className="font-semibold text-lg">Latest</h2>
                <a href="explore.html"> See all</a>
              </div>
              <div className="grid grid-cols-2 gap-2 p-3 uk-link-reset">
                <CoverImageV1/>
                <CoverImageV2/>                
                <CoverImageV2/>    
                <CoverImageV1/>
              </div>
            </div>
          </div>
        );
    }
}

export default Latest;