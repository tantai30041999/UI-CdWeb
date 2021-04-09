import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <h3 className="text-xl mb-2"> {this.props.title}</h3>
        );
    }
}

export default Title;