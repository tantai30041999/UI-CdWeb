import React, { Component } from 'react';
import ItemChat from './ItemChat';

class ListChat extends Component {
    render() {
        return (
            <div className="pb-16 w-full">
            <ul className="dark:text-gray-100">
            <ItemChat/>
            <ItemChat/>
            <ItemChat/>
            <ItemChat/>
            <ItemChat/>
            </ul>
          </div>
        );
    }
}

export default ListChat;