import React, { Component } from 'react';
import $ from 'jquery';
class DelPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            cancelColor: '',

        }
        this.closeModal = this.closeModal.bind(this);
        this.hoverCancel = this.hoverCancel.bind(this);
        this.outHoverCancel = this.outHoverCancel.bind(this);
        this.removePost = this.removePost.bind(this);

    }

    closeModal = () => {
        this.props.close();
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
    removePost = () => {
        var idPost = this.props.idPost;
        
      
        this.delPost(idPost);
         this.closeModal();

    }
    async delPost(idPost) {
        const url = "http://207.148.74.251:8080/api/post/delete/" + idPost;
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
            })
        }).then(response => {
            if (response.status == 200) {
              this.props.updateData();
           

            }
        })
    }
    render() {
        var language = this.props.language;
        var open = this.props.open;
        if (this.state.open == true) {
            document.body.style.overflow = 'hidden';
        }

        return (
            <div>
                {(open == true) ?
                    <div id="story-modal" className="uk-modal-container uk-modal uk-open" style={{ display: 'block' }}>
                        <div className="uk-modal-dialog deleteComment-modal">
                            <button onClick={this.closeModal} className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white uk-icon uk-close" type="button" uk-close><svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" strokeWidth="1.1" x1={1} y1={1} x2={13} y2={13} /><line fill="none" stroke="#000" strokeWidth="1.1" x1={13} y1={1} x2={1} y2={13} /></svg></button>

                            <div className="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100" >
                                {/* post header*/}
                                <div >
                                    <br></br>
                                    <h1 style={{ fontSize: '20px' }}><b>&nbsp;  &nbsp;{language.titleDelPost}</b></h1>
                                    <br></br>
                                </div>
                                <hr></hr>
                                <div className="story-content" data-simplebar="init">
                                    <p> &nbsp;  &nbsp; {language.messagesDelPost}</p>
                                </div>
                                <div>
                                    <ul style={{ margin: '0px', padding: '0px', overflow: 'hidden' }}>
                                        <li style={{ float: "right", marginRight: '15px', width: '14%' }}>
                                            <button onClick={this.removePost} style={{ display: 'block', backgroundColor: '#1877F2', width: '100%', padding: '8px', borderRadius: "5px", color: 'white' }}  ><b>{language.confirmDelComment}</b></button>
                                        </li>
                                        <li style={{ float: "right", marginRight: '15px' }}>
                                            <button onClick={this.closeModal} onMouseLeave={this.outHoverCancel} onMouseEnter={this.hoverCancel} style={{ backgroundColor: this.state.cancelColor, display: 'block', width: '100%', padding: '8px', borderRadius: "5px", color: '#1877F2' }} ><b>{language.cancelDelComment}</b></button>
                                        </li>
                                    </ul>

                                </div>

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

export default DelPost;