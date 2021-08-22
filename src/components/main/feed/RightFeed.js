import React, { Component } from 'react';
import Latest from './right/Latest';
import SuggestionUser from './right/SuggestionUser';

class RightFeed extends Component {
    render() {
        return (

        
            <div className="lg:w-5/12">
                <SuggestionUser language = {this.props.language}/>
                <Latest language = {this.props.language}/>
        
            </div>
          );
    }
}

export default RightFeed;