import React, { Component } from 'react';
import ItemSuggestion from './ItemSuggestion';

class SuggestionUser extends Component {
    render() {
      var language = this.props.language;
        return (
            <div className="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:border-gray-800">
              <h2 className="font-semibold text-lg">{language.whoTofollow}</h2>
              <a href="#"> {language.refresh}</a>
            </div>
            <div className="divide-gray-300 divide-gray-50 divide-opacity-50 divide-y px-4 dark:divide-gray-800 dark:text-gray-100">
                <ItemSuggestion language={language}/>
                <ItemSuggestion language={language} />
                <ItemSuggestion language={language} />
                <ItemSuggestion language={language}/>
            </div>
          </div>
        );
    }
}

export default SuggestionUser;