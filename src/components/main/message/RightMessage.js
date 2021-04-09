import React, { Component } from 'react';
import ContentChat from './right/ContentChat';
import HandleChat from './right/HandleChat';
import HeaderChat from './right/HeaderChat';

class RightMessage extends Component {
  render() {
    return (

      <div className="lg:w-8/12 bg-white dark:bg-gray-800">

        {/*Header chat*/}
        <HeaderChat />
        <div className="border-t dark:border-gray-600">
          {/* Content chat*/}
          <ContentChat />

          {/* Handle Chat*/}
          <HandleChat />
        </div>
      </div>
    );
  }
}

export default RightMessage;