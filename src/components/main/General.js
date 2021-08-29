import React, { Component } from 'react';
import Description from './setting/Description';
import InfoBasicForm from './setting/InfoBasicForm';
import SettingOption from './setting/SettingOption';
import Title from './setting/Title';
import ContentPrivacy from './setting/ContentPrivacy';
import { Redirect } from 'react-router';
// import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
class General extends Component {
  render() {
    if(localStorage.getItem('username') == null && localStorage.getItem('password') == null) {
      return <Redirect to="/home"></Redirect>}
    else {
      return (
        <div id="wrapper">
           <SlideBar/>
        <div className="main_content">
          {/* <Header /> */}
          <div className="container m-auto">
            <h1 className="text-2xl leading-none text-gray-900 tracking-tight mt-3"> Account Setting </h1>
            <SettingOption />
            {/* <InfoCommon/> */}
            <div className="grid lg:grid-cols-3 mt-12 gap-8">
              <div>
                <Title title="Basic" />
                <Description description="Lorem ipsum dolor sit amet nibh consectetuer adipiscing elit" />
              </div>
              <InfoBasicForm />
              <div>
                <Title title="Privacy" />
                <Description description="Lorem ipsum dolor sit amet nibh consectetuer adipiscing elit" />
              </div>
              <ContentPrivacy />
              </div>
            </div>
          </div>
        </div>
      );
    }
 

  }
}

export default General;