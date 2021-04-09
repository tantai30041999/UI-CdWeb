import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <h4> {this.props.question}</h4>
        );
    }
}

export default Question;