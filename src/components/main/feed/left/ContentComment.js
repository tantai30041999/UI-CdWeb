import { data } from 'jquery';
import React, { Component } from 'react';
import EditComment from './EditComment';
import ItemComment from './ItemComment';

class ContentComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      content: "",
      comments: [],
    

    }
    this.handleInputComment = this.handleInputComment.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }
  componentDidMount() {

    this.loadComment();
    this.props.exitUpdateComponent();

  }
  async handleKeyPress(event) {
    var content = event.target.value;
    if (event.key === 'Enter') {
      if(content != "") {
        if(this.isEmpty(content) == false) {
          await this.setState({
            [event.target.name]: event.target.value.trim()
          })
          var data = {
            "content": this.state.content
          }
          var contentComment = JSON.stringify(data);
         await this.createComment(contentComment);  
        
        }
      }
    }
  }
async createComment (content) {
  let email = localStorage.getItem('username');
  let password = localStorage.getItem('password');
  var postedId = this.props.dataFooter.id;

  const url = "http://207.148.74.251:8080/api/comment/create/" + postedId;
  fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Basic ' + btoa(email + ':' + password),
    }),
    body : content

  }).then(response => {
    if (response.ok) {
      // console.log(response.status)
        this.setState({content:""})
        this.loadComment();
    }
  })


}
  isEmpty (str) {
    var length = str.length;
    for(var i = 0; i < length; i++) {
        if(str[i] !=" ") {
           return false; 
        }
    }
    return true;
  }
  async handleInputComment(event) {
    await this.setState({
      [event.target.name]: event.target.value
    })

  }
  loadComment = async () => {
    let email = localStorage.getItem('username');
    let password = localStorage.getItem('password');

    var postedId = this.props.dataFooter.id;
    const url = "http://207.148.74.251:8080/api/comment/all/post/" + postedId;
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Basic ' + btoa(email + ':' + password),
      }),

    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          var comments = json;
          this.setState({ comments });
         
        })
      }
    })

  }

 async deleteComment (postedId) {
    let email = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    const url = "http://207.148.74.251:8080/api/comment/delete/" + postedId;
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Basic ' + btoa(email + ':' + password),
      }),

    }).then(response => {
      if (response.ok) {
              
       this.loadComment();

      }
    })

  }
  async updateComment(idComment,content)  {
    let email = localStorage.getItem('username');
    let password = localStorage.getItem('password');
  
    var contentJSon = JSON.stringify(content);
    const url = "http://207.148.74.251:8080/api/comment/update/" + idComment;
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Basic ' + btoa(email + ':' + password),
      }),
      body : contentJSon,

    }).then(response => {
      if (response.ok) {
              
       this.loadComment();

      }
    })



  }
  render() {
 
    var removeComment = this.deleteComment;
    var updateComment = this.updateComment;
    var listData = this.state.comments;
    var language = this.props.language;
    var update = this.props.updateComponent;
    var viewComment = showViewComment(listData, language);
 
   if(update == true) {
     this.loadComment();
   }


    function showViewComment(listData, language) {
 
      var commentViews = [];
      var size = listData.length;
      if (size > 0) {
        for (let i = 0; i < size; i++) {
          commentViews.push(<ItemComment key={i} language={language} comment={listData[i]} removeComment={removeComment} updateComment={updateComment} />);
        }
        return commentViews.reverse();
      }

    }


    return (
      <div>
        <div className="border-t pt-4 space-y-4 dark:border-gray-600">
          {viewComment}

        </div>
        <br></br>
      
        <br></br>
        <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
          <input type="text" name="content" onInput={this.handleInputComment} onKeyPress={this.handleKeyPress} value={this.state.content} placeholder={language.writeComment} className="bg-transparent max-h-10 shadow-none" />
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