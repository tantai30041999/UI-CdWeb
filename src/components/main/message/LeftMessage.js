import React, { Component } from 'react';
import ListChat from './left/ListChat';
import SearchChat from './left/SearchChat';

class LeftMessage extends Component {
  render() {
    return (

      <div className="lg:w-4/12 bg-white border-r overflow-hidden dark:bg-gray-800 dark:border-gray-600">
        {/* search*/}
        <SearchChat />
        {/* user list*/}
        <ListChat />
      </div>
    );
  }
}

export default LeftMessage;