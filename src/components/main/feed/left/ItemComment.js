import React, { Component } from 'react';
import DelModal from './DelModal';

class ItemComment extends Component {
     constructor(props) {
       super(props)
       this.state = {
         idUserCurrent : "",
         idComment : "",
         content :"",
         commentByUser : "",
         hoverEdit : "",
         hoverDelete :"",
         hoverProfile : "",
         hoverDivComment : "none",
         delComment : false,
       }
       this.onMouseDisplayName = this.onMouseDisplayName.bind(this);
       this.onMouseLeaveDisplayName = this.onMouseLeaveDisplayName.bind(this);
       this.onMouseEnterUnderLine = this.onMouseEnterUnderLine.bind(this);
       this.onMouseLeaveUnderline = this.onMouseLeaveUnderline.bind(this);
       this.onMouseEnterDivComment = this.onMouseEnterDivComment.bind(this);
       this.onMouseLeaveDivComment = this.onMouseLeaveDivComment.bind(this);
       this.deleteComment = this.deleteComment.bind(this);
       this.showModal = this.showModal.bind(this);

     }

componentDidMount() {
  var userCurrent = JSON.parse(localStorage.getItem('userInf'));
  var idUserCurrent = userCurrent.id;
  this.setState({idUserCurrent})
  this.loadComment();
 
 
}
async deleteComment (event){
  event.preventDefault();
  var delComment = true;
       await this.setState({delComment})
     
}


async loadComment () {
  var comment = this.props.comment;
  var idComment = comment.id;
  var commentByUser = comment.commentedBy;
  var content = comment.content;


  await this.setState({idComment});
  await this.setState({commentByUser});
  await this.setState({content});
}
onMouseDisplayName = async () => {
    await this.setState({
      hoverProfile : "underline"
     })
  
}
onMouseLeaveDisplayName = async () => {
 
  await this.setState({
    hoverProfile : ""
   })

}
onMouseEnterUnderLine  = async (event) => {
  if(event.target.name =='edit') {
 
    await this.setState({
      hoverEdit : "underline"
     })
  }

  if(event.target.name =='delete') {
    await this.setState({
      hoverDelete : "underline"
     })
  }


}
onMouseLeaveUnderline  = async (event) => {

  if(event.target.name =='edit') {
    await this.setState({
      hoverEdit : ""
     })
  }
  if(event.target.name =='delete') {
    await this.setState({
      hoverDelete : ""
     })
  }

}

onMouseEnterDivComment = async () => {

  if(this.state.idUserCurrent == this.state.commentByUser.id) {
    await this.setState({
      hoverDivComment : "block"
    })
  }


}

onMouseLeaveDivComment = async () => {
  await this.setState({
    hoverDivComment : "none"
  })
}
showModal (status) {
   if(status == false) {
     this.setState({
       delComment : false})
   }
}

    render() {
 
      
    
    
 
        return (
      
         
          <div  onMouseEnter={this.onMouseEnterDivComment} onMouseLeave={this.onMouseLeaveDivComment}>
            <DelModal open={this.state.delComment}  modalCallBack ={this.showModal} idComment={this.state.idComment} removeComment={this.props.removeComment}/>
            <div className="flex"  >
            <div className="w-10 h-10 rounded-full relative flex-shrink-0">
              <img src="assets/images/avatars/avatar-1.jpg" alt="" className="absolute h-full rounded-full w-full" />
            </div>
         
            <div  className="text-gray-800 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
               <a   href="" style={{textDecoration: this.state.hoverProfile}} onMouseEnter={this.onMouseDisplayName} onMouseLeave={this.onMouseLeaveDisplayName}><b>{this.state.commentByUser.displayName}</b></a>
            
              <p className="leading-6">{this.state.content}</p>
              
              <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />
              
            </div>
            
              
          </div>
    
          <div       style={{display:this.state.hoverDivComment}}>
            <ul style={{width:"75%", margin:"auto"}}>
              <li style={{float:"left", width:'10%', fontSize:'12px'}}><b><a name="edit" href="" style={{textDecoration: this.state.hoverEdit}} onMouseEnter={this.onMouseEnterUnderLine} onMouseLeave={this.onMouseLeaveUnderline}>Edit</a></b></li>
              <li  style={{fontSize:'12px'}}><b><a name="delete" onClick={this.deleteComment}  style={{textDecoration:this.state.hoverDelete}}  onMouseEnter={this.onMouseEnterUnderLine} onMouseLeave={this.onMouseLeaveUnderline}>Delete</a></b></li>
            </ul>


          </div>
          </div>
        );
    }
}

export default ItemComment;