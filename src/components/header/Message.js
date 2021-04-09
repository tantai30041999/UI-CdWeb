import React, { Component } from 'react';
import ItemMessege from './ItemMessege';

class Message extends Component {
  render() {
    return (

      <div uk-drop="mode: click;offset: 4" className="header_dropdown">
        <h4 className="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
          Messages </h4>
        <ul className="dropdown_scrollbar" data-simplebar>
          <ItemMessege />
          <ItemMessege />
          <ItemMessege />
          <ItemMessege />
          <ItemMessege />
          <ItemMessege />
        </ul>
        <a href="#" className="see-all">See all</a>
      </div>

    );
  }
}

export default Message;