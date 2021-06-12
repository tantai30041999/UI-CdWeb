import React, { Component } from 'react';

class OperatePost extends Component {

   constructor(props) {
     super(props)
     this.state = {
      id : null,
      likingAt: "",
      unlikingAt: "",
      postId : "",
      userId : "",
      liked : false,
      fill :"currentColor",
     }
     this.likedPost = this.likedPost.bind(this);

   }

  initialPost = ()  => {
    // load api
  }

  
  likedPost = () => {
    var liked = this.state.liked;
    var fill = "";
    if(liked == true) {
      fill = "currentColor";
      liked = false;
      this.setState({fill})
      this.setState({liked});
    }else {
      if(liked == false) {
        liked = true;
        fill ="blue";
        this.setState({fill})
        this.setState({liked});
      }
    }
  }

  loadLikePost = async () => {
        
    let email = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    const url ="http://207.148.74.251:8080/api/postliking/all/post/"+this.state.postId;
    fetch(url, {
       method: 'GET',
       headers: new Headers({
         'Accept': 'application/json',
         'Content-Type': 'application/json; charset=UTF-8',
         'Authorization': 'Basic ' + btoa(email +':'+password),
       }),
      
   }).then(response => response.json())
     .then(json => {
         
        console.log(json);
       
     })
 }


 createLiked = () => {

 }
    render() {
    

      
        return (
          <div>
            <div className="flex space-x-4 lg:font-bold">
            <a  onClick={this.likedPost}  className="flex items-center space-x-2">
              <div className="p-2 rounded-full text-black">
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={this.state.fill} width={22} height={22} className="dark:text-gray-100">
                  <path   d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <div style={{color:this.state.fill}}> Like</div>
            </a>
            <a href="#" className="flex items-center space-x-2">
              <div className="p-2 rounded-full text-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                  <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                </svg>
              </div>
              <div> Comment</div>
            </a>
            <a href="#" className="flex items-center space-x-2 flex-1 justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={22} height={22} className="dark:text-gray-100">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <div> Share</div>
            </a>
          </div>
                  <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <img src="assets/images/avatars/avatar-1.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900" />
                    <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                    <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 -ml-2" />
                  </div>
                  <div className="dark:text-gray-100">
                     {this.state.liked == true ?  <strong> You </strong>:""} and <strong> 209 Others </strong>
                  </div>
                </div>
                </div>
        );
    }
}

export default OperatePost;