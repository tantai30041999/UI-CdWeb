import React, { Component } from 'react';
import DelModal from './DelModal';
import EditComment from './EditComment';

class ItemComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idUserCurrent: "",
      idComment: "",
      content: "",
      commentByUser: "",
      hoverEdit: "",
      hoverDelete: "",
      hoverProfile: "",
      hoverDivComment: "none",
      delComment: false,
      editComment: false,
      openEditModal: false,
    }
    this.onMouseDisplayName = this.onMouseDisplayName.bind(this);
    this.onMouseLeaveDisplayName = this.onMouseLeaveDisplayName.bind(this);
    this.onMouseEnterUnderLine = this.onMouseEnterUnderLine.bind(this);
    this.onMouseLeaveUnderline = this.onMouseLeaveUnderline.bind(this);
    this.onMouseEnterDivComment = this.onMouseEnterDivComment.bind(this);
    this.onMouseLeaveDivComment = this.onMouseLeaveDivComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.showDelModal = this.showDelModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);

  }

  componentDidMount() {
    var userCurrent = JSON.parse(localStorage.getItem('userInf'));
    var idUserCurrent = userCurrent.id;
    this.setState({ idUserCurrent })
    this.loadComment();


  }
  async deleteComment(event) {
    event.preventDefault();
    var delComment = true;
    await this.setState({ delComment })

  }
  async updateComment(event) {
    event.preventDefault();
  await  this.loadComment();
    var openEditModal = true;
    var editComment = true;
    await this.setState({ openEditModal });
    await this.setState({ editComment })
  }






  async loadComment() {
    var comment = this.props.comment;
    var idComment = comment.id;
    var commentByUser = comment.commentedBy;
    var content = comment.content;


    await this.setState({ idComment });
    await this.setState({ commentByUser });
    await this.setState({ content });
  }
  onMouseDisplayName = async () => {
    await this.setState({
      hoverProfile: "underline"
    })

  }
  onMouseLeaveDisplayName = async () => {

    await this.setState({
      hoverProfile: ""
    })

  }
  onMouseEnterUnderLine = async (event) => {
    if (event.target.name == 'edit') {

      await this.setState({
        hoverEdit: "underline"
      })
    }

    if (event.target.name == 'delete') {
      await this.setState({
        hoverDelete: "underline"
      })
    }


  }
  onMouseLeaveUnderline = async (event) => {

    if (event.target.name == 'edit') {
      await this.setState({
        hoverEdit: ""
      })
    }
    if (event.target.name == 'delete') {
      await this.setState({
        hoverDelete: ""
      })
    }

  }

  onMouseEnterDivComment = async () => {

    if (this.state.idUserCurrent == this.state.commentByUser.id) {
      await this.setState({
        hoverDivComment: "block"
      })
    }


  }

  onMouseLeaveDivComment = async () => {
    await this.setState({
      hoverDivComment: "none"
    })
  }
  showDelModal(status) {
    if (status == false) {
      this.setState({
        delComment: false
      })
    }
  }
  showEditModal(status) {
    if (status == false) {
      this.setState({
        editComment: false
      })
    }
  }

  render() {
    var language = this.props.language;
    var openEditModal = this.state.openEditModal;
 


    return (

      <div>

        <div id="showComment" onMouseEnter={this.onMouseEnterDivComment} onMouseLeave={this.onMouseLeaveDivComment}>
          <DelModal open={this.state.delComment} language={language} modalCallBack={this.showDelModal} idComment={this.state.idComment} removeComment={this.props.removeComment} />

          {/* {openEditModal == true ?  
           <EditComment open={this.state.editComment} language={language} modalCallBack={this.showEditModal} idComment={this.state.idComment} updateComment={this.props.updateComment} content ={this.state.content}/>

          :""} */}
        
          <div className="flex"  >
            <div className="w-10 h-10 rounded-full relative flex-shrink-0">
              <img src="assets/images/avatars/avatar-1.jpg" alt="" className="absolute h-full rounded-full w-full" />
            </div>

            <div className="text-gray-800 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20  dark:bg-gray-800 dark:text-gray-100">
              <a href="" style={{ textDecoration: this.state.hoverProfile }} onMouseEnter={this.onMouseDisplayName} onMouseLeave={this.onMouseLeaveDisplayName}><b>{this.state.commentByUser.displayName}</b></a>

              <p className="leading-6">{this.state.content}</p>

              <div className="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800" />

            </div>


          </div>

          <div style={{ display: this.state.hoverDivComment }}>
            <ul style={{ width: "75%", margin: "auto" }}>
              {/* <li style={{ float: "left", width: '10%', fontSize: '12px' }}><b><a onClick={this.updateComment} name="edit" style={{ textDecoration: this.state.hoverEdit }} onMouseEnter={this.onMouseEnterUnderLine} onMouseLeave={this.onMouseLeaveUnderline}>{language.editComment}</a></b></li> */}
              <li style={{ float: "left", width: '15%', fontSize: '12px'}}><b><a name="delete" onClick={this.deleteComment} style={{ textDecoration: this.state.hoverDelete }} onMouseEnter={this.onMouseEnterUnderLine} onMouseLeave={this.onMouseLeaveUnderline}>{language.delComment}</a></b></li>
            </ul>


          </div>
        </div>




      </div>
    );
  }
}

export default ItemComment;