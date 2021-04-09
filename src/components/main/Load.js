import React, { Component } from 'react';

class Load extends Component {
    render() {
        return (
            <div className="flex justify-center mt-6" id="toggle" uk-toggle="target: #toggle ;animation: uk-animation-fade">
            <a href="#" className="bg-white dark:bg-gray-900 font-semibold my-3 px-6 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white">
              Load more ..</a>
          </div>
        );
    }
}

export default Load;