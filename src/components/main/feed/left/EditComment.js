import React, { Component } from 'react';
import $ from 'jquery';
var content;
class EditComment extends Component {
    constructor(props) {
      
        super(props)
       
        this.state = {
            
            open: false,
            cancelColor: '',
            content : "",
            saveContent : "",
        }
        this.closeModal = this.closeModal.bind(this);
        this.hoverCancel = this.hoverCancel.bind(this);
        this.outHoverCancel = this.outHoverCancel.bind(this);
        this.handleInputContent = this.handleInputContent.bind(this);
        this.updateComment = this.updateComment.bind(this);
    }
      componentDidMount() {
         this.getContent();   
    }
 

    getContent = async () => {   
        var content =  this.props.content;
        var saveContent = content;
         console.log(content);
        await this.setState({content});
        await this.setState({saveContent});

    }
    async handleInputContent(event) {
        event.preventDefault();

        await this.setState({
            [event.target.name]: event.target.value
          })
    }
    closeModal = () => {
        this.props.modalCallBack(false);

        $('#story-modal').hide();
        this.setState({
            open: false
        })
        document.body.style.overflow = 'unset';

    }
    hoverCancel = () => {
        this.setState({
            cancelColor: '#E0E0E0'
        })
    }

    outHoverCancel = () => {
        this.setState({
            cancelColor: ''
        })
    }

     updateComment = async () => {

        var idComment = this.props.idComment;
        var content = this.state.content;
        if(content =="") {
            content = this.state.saveContent;
        }
        var json = {
            "content" : content,
        }
       await  this.props.updateComment(idComment,json);
        // this.closeModal();

    }
    render() {
        var open = this.props.open;

        if(this.state.open == true) {
           document.body.style.overflow = 'hidden';
       }
        return (

            <div>
                {(open == true) ? 
                <div id="story-modal" className="uk-modal-container uk-modal uk-open" style={{ display: 'block' }}>
                    <div className="uk-modal-dialog deleteComment-modal">
                        <button  onClick={this.closeModal} className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white uk-icon uk-close" type="button" uk-close><svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" strokeWidth="1.1" x1={1} y1={1} x2={13} y2={13} /><line fill="none" stroke="#000" strokeWidth="1.1" x1={13} y1={1} x2={1} y2={13} /></svg></button>

                        <div className="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100" >
                            {/* post header*/}
                            <div >
                                <br></br>
                                <h1 style={{ fontSize: '20px' }}><b>&nbsp;  &nbsp;Edit Comment</b></h1>
                                <br></br>
                            </div>
                            <hr></hr>
                            <div className="story-content" data-simplebar="init">
                                <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                                    <input type="text" name="content" className="bg-transparent max-h-10 shadow-none"  value={this.state.content} onChange={this.handleInputContent}/>
                                    <div className="absolute bottom-0 flex h-full items-center right-0 right-3 text-xl space-x-2">
                                        {/* <a href="#"> <i className="uil-image" /></a>
                                        <a href="#"> <i className="uil-video" /></a> */}
                                    </div>

                                </div>
                            </div>
                            <br></br>
                            <div>
                                <ul style={{ margin: '0px', padding: '0px', overflow: 'hidden' }}>
                                    <li style={{ float: "right", marginRight: '15px', width: '14%' }}>
                                        <button onClick={this.updateComment} style={{ display: 'block', backgroundColor: '#1877F2', width: '100%', padding: '8px', borderRadius: "5px", color: 'white' }}  ><b>Update</b></button>
                                    </li>
                                    <li style={{ float: "right", marginRight: '15px' }}>
                                        <button onClick={this.closeModal} style={{ display: 'block', width: '100%', padding: '8px', borderRadius: "5px", color: '#1877F2' }} ><b>Cancel</b></button>
                                    </li>
                                </ul>

                            </div>
                            <br></br>

                        </div>

                    </div>

                </div>
                 :
               ""    
            } 

            </div>
        );

    }
}

export default EditComment;