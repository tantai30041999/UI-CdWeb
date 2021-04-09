import React, { Component } from 'react';
import Latest from './right/Latest';
import SuggestionUser from './right/SuggestionUser';

class RightFeed extends Component {
    render() {
        return (

        
            <div className="lg:w-5/12">
                <SuggestionUser/>
                <Latest/>
        
            </div>
          );
    }
}

export default RightFeed;