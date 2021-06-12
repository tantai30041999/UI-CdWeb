import React, { Component } from 'react';
import ItemComment from './ItemComment';

class ContentComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
           id : null,
           content : "",
           createAt :"",
           deletedAt :"",
           replyingTo :"",
           commentedById :"",
           postId : ""
        }
        this.handleInputComment = this.handleInputComment.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
componentDidMount () {
    var data = this.props.dataFooter;
    var commentedById =  data.postedBy.id;
    var postId  = data.id;
    this.setState({commentedById});
    this.setState({postId});
    
}
handleKeyPress (event) {
    // if(event.key ==="Shift" && event.key==="Enter") {
    //     var content = this.state.content;
    //     content +="\n";
    //     this.setState({content});
    // }
    if(event.key === 'Enter') {
        console.log(this.state.content)
        
    }
}
async handleInputComment (event) {

  
    await this.setState({
        [event.target.name]: event.target.value
      })
  
}
loadComment = async () => {
    let email = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    const url ="http://207.148.74.251:8080/api/comment/all/post/"+this.state.postId;
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
    render() {
       
        return (
            <div>
            <div className="border-t pt-4 space-y-4 dark:border-gray-600">
              <ItemComment/>
              <ItemComment/>
          </div>
           <br></br>
          <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
            <input type="text" name="content" onInput={this.handleInputComment} onKeyPress={this.handleKeyPress} placeholder="Write your Comment.." className="bg-transparent max-h-10 shadow-none" />
            <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
              <a href="#"> <i className="uil-image" /></a>
              <a href="#"> <i className="uil-video" /></a>
            </div>
          </div>
          </div>
        );
    }
}

export default ContentComment;