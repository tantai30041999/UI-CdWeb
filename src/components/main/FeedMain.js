import React, { Component } from 'react';
import LeftFeed from './feed/LeftFeed';
import RightFeed from './feed/RightFeed';
import Header from '../header/Header';
import SlideBar from '../slidebar/SlideBar';
class FeedMain extends Component {
      constructor(props) {
        super(props);
        console.log(localStorage.getItem('user'))
       this.state = {
         dataPost :"",
       }
      }

loadData () {

  const url ="";
  fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Basic ' + btoa('abc@gmail.com:962327875f14613600549dc1333341cd8c1fa3e0d0a2b46882c54df01a038262'),
    }),
  })
    .then(response => response.json())
    .then(json => {
      console.log(json)

        //  if(a) {
        //     var dataPost = json;
        //     this.setState({
        //       dataPost
        //     })
        //  }
    })

}

     
    render() {
 

        return (
            <div>
            <div id="wrapper">
      
               <SlideBar/>
              <div className="main_content">
                <Header/>
                <div className="container m-auto">
                  <h1 className="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5"> Feed </h1>
                  <div className="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">
                    {/* left sidebar*/}
                      <LeftFeed/>
                    {/* right sidebar*/}
                      <RightFeed/>
                  </div>               
                </div>
              </div>
            </div>
          
          </div>
              );
        
    }
}

export default FeedMain;