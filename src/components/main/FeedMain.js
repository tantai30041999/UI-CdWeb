import React, { Component } from 'react';
import LeftFeed from './feed/LeftFeed';
import RightFeed from './feed/RightFeed';
import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
import LoginForm from '../login/LoginForm';
import { Redirect } from 'react-router';

class FeedMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AllPost: [],
      idDelPost: "",
      updateComponent : false,
    }

    this.getPostById = this.getPostById.bind(this);
    this.updateAfterCreatePost = this.updateAfterCreatePost.bind(this);
  }

  componentDidMount() {
    this.loadData();

    
  }

  async loadData() {

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
        var AllPost = this.convertArray(json).reverse();
       
        this.setState({ AllPost });
      })
  }
  async getPostById(idPost) {
    var idDelPost = idPost;
    await this.setState({ idDelPost });
    await this.deletedPost();

  }

  async updateAfterCreatePost(status) {
       var updateComponent = status;
       await this.setState({updateComponent});
       await this.loadData();
  }

  deletedPost = async () => {
    const url = "http://207.148.74.251:8080/api/post/delete/" + this.state.idDelPost;
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
      })
    }).then(response => {
      if (response.status == 200) {
         
         this.loadData();
          
     
      
      }
    })
    var updateComponent = true;
    this.setState({updateComponent})
  }



  convertArray(jsonData) {
    var arrData = [];
    for (var i in jsonData) {
      arrData.push(jsonData[i]);
    }
    return arrData;
  }


  render() {
    
    if(localStorage.getItem('username') == null && localStorage.getItem('password') == null) {
      return <Redirect to="/home"></Redirect>
    }else {
      var dataPost = this.state.AllPost;
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
                  <LeftFeed dataFromParent={dataPost}  updateAfterCreatePost={this.updateAfterCreatePost} updatePost={this.getPostById}  updateComponent={this.state.updateComponent}/>
  
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
}

export default FeedMain;