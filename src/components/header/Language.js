import React, { Component } from 'react';

class Language extends Component {
       constructor(props) {
           super(props) 
           this.state = {

           }
           this.getLanguage = this.getLanguage.bind(this);
           
       }
getLanguage (e) {
    e.preventDefault();
    var language = this.props.language;
    this.props.getLanguage(language);
}
    render() {
       
        
        return (
            <div>
                 <li  onClick={this.getLanguage}><a ><img src={this.props.src} style={{ width: '30px', height: '30px' }}></img>&nbsp; {this.props.language} </a> </li>
            </div>
        );
    }
}

export default Language;