import React, { Component } from 'react';
import DescripPrivacy from './DescripPrivacy';
import Question from './Question';

class PrivacyLine extends Component {
    render() {
        return (
            <div className="flex justify-between items-center">
            <div>
            
             <Question question=" Who can follow me ?"/>
             <DescripPrivacy desPrivacy="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"/>
            </div>
            <div className="switches-list -mt-8 is-large">
              <div className="switch-container">
                <label className="switch"><input type="checkbox" /><span className="switch-button" /> </label>
              </div>
            </div>
          </div>
        );
    }
}

export default PrivacyLine;