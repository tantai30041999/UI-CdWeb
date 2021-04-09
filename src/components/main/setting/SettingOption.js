import React, { Component } from 'react';

class SettingOption extends Component {
    render() {
        return (
            <ul className="mt-5 -mr-3 flex-nowrap lg:overflow-hidden overflow-x-scroll uk-tab">
                    <li className="uk-active"><a href="#">General</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Notification</a></li>
                    <li><a href="#">Social links</a></li>
                    <li><a href="#">Billing</a></li>
                    <li><a href="#">Security</a></li>
                  </ul>
        );
    }
}

export default SettingOption;