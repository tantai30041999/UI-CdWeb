import React, { Component } from 'react';

class Favorites extends Component {
    render() {
        return (
            <div className="flex font-semibold mb-3 space-x-2  dark:text-gray-10">
            <a href="#">Travailing</a> , <a href="#">Sports</a>  , <a href="#">Movies</a> 
          </div>
        );
    }
}

export default Favorites;