import React, { Component } from 'react';
import $, { error } from 'jquery';
import { enc } from 'crypto-js';
import { Redirect } from 'react-router';


var sqlDatetime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toJSON().slice(0, 19).replace('T', ' ');
const initialState = {
    id: "",
    caption :"",
    create_at: sqlDatetime.substring(0, 10),
    deleted_at:"",
    images: [],
    public_post :true,
    posted_by_id :"",
    login : false,
    isdisabled : true,
    colorButton :"#E0E0E0",
    color : "#606060",
    place :  "",
}
class CreatePost extends Component {
    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            caption :"",
            create_at: sqlDatetime.substring(0, 10),
            deleted_at:"",
            images: [],
            public_post :true,
            posted_by_id :"",
            login : false,
            isdisabled : true,
            colorButton :"#E0E0E0",
            color : "#606060",
            place :  "",
          

        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleStatePost = this.handleStatePost.bind(this);
        this.removeAllImage = this.removeAllImage.bind(this);
        this.loadFeedPost = this.loadFeedPost.bind(this);

    }
 async componentDidMount() {
   
   await this.getUser();
}


 loadFeedPost = async (e) => {
    e.preventDefault();
    await this.uploadFiles();
    await  this.setState(initialState);
    this.getUser();
    $('#story-modal').hide();   
}
// get user current
   getUser = async () => {
       const userInf = JSON.parse(localStorage.getItem('userInf'));
       var posted_by_id = userInf;
     await  this.setState({posted_by_id});
       var place = "What's on your mind, "+userInf.displayName+"?";
    await   this.setState({place});
   }
    handleStatePost = async () => {
        var public_post =  await $('#statePost').find(":selected").val();
        this.setState({public_post});  
    }
   createPost =(data) => {
     const url ="http://207.148.74.251:8080/api/post/create";
     fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Basic ' + btoa(localStorage.getItem('username')+":"+localStorage.getItem('password')),
        }),
        body : data
    }).then(response => {
        if(response.ok) {
            this.props.updateAfterCreatePost();
        }
    })
     
    
}
    async handleChange(event) {
        var tag = event.target.name;
        var valueCaption = event.target.value;
        await this.setState({
            [event.target.name]: event.target.value
          }) 
        if(tag =="caption") {
            if( valueCaption != "") {
              
                var isdisabled = false;
                var colorButton = "#1877F2";
                var color ="white";
               await this.setState({isdisabled});
               await this.setState({colorButton});
               await this.setState({color});
            }else {
                var isdisabled = true;
                var colorButton ="#E0E0E0";
                var color ="#606060";
              await  this.setState({isdisabled});
              await this.setState({colorButton});
              await this.setState({color});

            }
        }
       
      
   
    }

    removeAllImage = () => {
        $('#addFile').val('');
        this.fileArray = [];
        this.fileObj = [];
        var images = [];
        this.setState({ images })
    }
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        
        for (let i = 0; i < this.fileObj[0].length; i++) {
         this.convertBase64(this.fileObj[0][i]);
          this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }

    }
    addImage(image) {
       
        return this.images.push(image);
    }
   async uploadFiles() {
    const userInf = JSON.parse(localStorage.getItem('userInf'));
    var posted_by_id = userInf;
    if(this.state.isdisabled == false) {
        var data = {
            id: null,
            caption :this.state.caption,
            createdAt: this.state.create_at,
            deleteAt:null,
            images: this.state.images,
            publicPost : this.state.public_post,
            postedBy : posted_by_id,
        }
        var json = JSON.stringify(data);

        this.createPost(json);
    }  
    }
      async convertBase64 (file)  {
        var reader = new FileReader();     
        reader.readAsDataURL(file);
         reader.onload = () => {
            var images = this.state.images.slice();
            var array = reader.result.split(',');
            images.push(array[1]);
           
            this.setState({images});
         }
      
        reader.onerror = (error) => {
            console.log(error);
        }
    }
    showModal() {
        this.setState(initialState);
        $('#story-modal').show();
    }
    hideModal(e) {
        e.preventDefault();
        this.setState(initialState);
        this.getUser()
    
    $('#story-modal').hide();
}



    render() {
    //    this.getUser();
        
        var isListImage = false;
        // var login = this.state.login;
        // if(login == false) {
        //     return <Redirect to="/home"></Redirect>
        // }
        if (this.state.images.length > 0) {
            isListImage = true;
        }
        var language = this.props.language;
     



        return (
            <div>
                <div className="bg-white shadow rounded-md dark:bg-gray-900 -mx-2 lg:mx-0">
                    {/* post header*/}
                    <div className="flex justify-between items-center px-4 py-3">
                        <div className="flex flex-1 items-center space-x-4">
                            <a href="#">
                                <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                    <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 border border-white rounded-full w-8 h-8" />
                                </div>
                            </a>
                            <span className="block capitalize font-semibold dark:text-gray-100">{this.state.posted_by_id.displayName}</span>
                        </div>

                    </div>

                    <div className="py-3 px-4 space-y-3">


                        <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                            <input type="text" placeholder={this.state.place} className="bg-transparent max-h-10 shadow-none" onClick={this.showModal} />

                        </div>
                       
                      
                    </div>
                </div>

                <div id="story-modal" className="uk-modal-container uk-modal uk-open" uk-modal style={{ display: 'none', }} >
                    <div className="uk-modal-dialog story-modal">
                        <button onClick={this.hideModal} className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white uk-icon uk-close" type="button" uk-close><svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" strokeWidth="1.1" x1={1} y1={1} x2={13} y2={13} /><line fill="none" stroke="#000" strokeWidth="1.1" x1={13} y1={1} x2={1} y2={13} /></svg></button>

                        <div className="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100" >
                            {/* post header*/}
                            <div >
                                <br></br>
                                <h1 style={{ textAlign: 'center', fontSize: '20px' }}><b>{language.titleCreatePost}</b></h1>
                                <br></br>
                            </div>
                            <hr></hr>
                            <div className="story-content p-4" data-simplebar="init"><div className="simplebar-wrapper" style={{ margin: '-16px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer" /></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div className="simplebar-content" style={{ padding: '16px', height: '100%', overflow: 'hidden' }}>

                                <div className="flex flex-1 items-center space-x-4">

                                    <a href="#">
                                        <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-0.5 rounded-full">
                                            <img src="assets/images/avatars/avatar-2.jpg" className="bg-gray-200 border border-white rounded-full w-8 h-8" />

                                        </div>

                                    </a>

                                    <span className="block text-lg font-semibold">{this.state.posted_by_id.displayName}</span>
                                    <select onChange={this.handleStatePost} id="statePost" style={{ width: '110px', height: '30px' }}>
                                           <option value="true"selected>{language.publicPost}</option>
                                           <option value="false">{language.privatePost}</option>
                                    </select>
                                </div>
                                <br></br>
                                <textarea name="caption"  onChange={this.handleChange} rows={4} cols={50} value={this.state.caption} style={{ resize: 'none' }} />
                                <div className="py-4 ">
                                    <div className="flex justify-around">

                                        <div className="flex space-x-4 lg:font-bold">

                                            <input type="file" id="addFile" onChange={this.uploadMultipleFiles} classname="bg-white py-2 px-4 rounded shadow"  />


                                        </div>

                                        {isListImage ? <button onClick={this.removeAllImage} className="shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white uk-icon uk-close" type="button" uk-close><svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" strokeWidth="1.1" x1={1} y1={1} x2={13} y2={13} /><line fill="none" stroke="#000" strokeWidth="1.1" x1={13} y1={1} x2={1} y2={13} /></svg></button> : ''}

                                    </div>
                                </div>
                                <div id="previewImage" style={{ overflow: 'auto', height: '200px' }}>

                                    {isListImage && (this.fileArray || []).map(url => (
                                        <img src={url} alt="..." />
                                    ))}
                                </div>

                            </div>
                            </div>
                            </div>
                            </div></div>
                            <div style={{ textAlign: 'center' }}>
                             <button id="submitPost"  onClick={this.loadFeedPost} style={{ width: '95%', backgroundColor: this.state.colorButton, margin: '0 auto', color: this.state.color, borderRadius: '5px', height: '40px' }} ><b>{language.createPost}</b></button>
                            </div>
                            <br></br>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default CreatePost;