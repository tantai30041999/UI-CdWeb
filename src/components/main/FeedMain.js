import React, { Component } from 'react';
import LeftFeed from './feed/LeftFeed';
import RightFeed from './feed/RightFeed';
import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
class FeedMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AllPost: [],
    }
  }

  componentDidMount() {
    this.loadData();
  }
  loadData() {

    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');

    const url = "http://207.148.74.251:8080/api/post/all";
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Basic ' + btoa(username + ":" + password),
      }),
    })
      .then(response => response.json())
      .then(json => {
        var AllPost = this.convertArray(json);
        this.setState({ AllPost });
      })
  }
  convertArray(jsonData) {
    var arrData = [];
    for (var i in jsonData) {
      arrData.push(jsonData[i]);
    }
    return arrData;
  }


  render() {


    return (
      <div>
        <div id="wrapper">

          <SlideBar />
          <div className="main_content">
            <Header />
            <div className="container m-auto">
              <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5"> Feed </h1>
              <div className="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">
                {/* left sidebar*/}
                <LeftFeed dataFromParent={this.state.AllPost} />
                {/* right sidebar*/}
                <RightFeed />
              </div>
            </div>
          </div>
        </div>

      </div>
    );

  }
}

export default FeedMain;