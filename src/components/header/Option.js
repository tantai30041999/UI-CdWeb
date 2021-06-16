import React, { Component } from 'react';
import * as i18n from "../translations/i18n";
import Language from './Language';
class Option extends Component {
  constructor(props) {
    super(props)
    this.state = {
      languages: ['English', 'Vietnamese', 'Japan'],
      images: ['assets/images/united-states.svg', 'assets/images/vietnam.svg', 'assets/images/japan.svg']
    }


  }

  render() {
    var languageView = [];
    var languages = this.state.languages;
    var legth = this.state.languages.length;
    var images = this.state.images;
    var getLanguage = this.props.getLanguage;

   
    function getView() {
      for (let i = 0; i < legth; i++) {
        languageView.push(<Language key={i} language={languages[i]} src={images[i]} getLanguage={getLanguage} />)
      }
      return languageView;
    }
    var listLanguages = getView();
 

    return (

      <div uk-drop="mode: click;offset:9" className="header_dropdown profile_dropdown border-t">
        <ul>
          {listLanguages}

        </ul>
      </div>

    );
  }
}

export default Option;