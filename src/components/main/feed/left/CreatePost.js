import React, { Component } from 'react';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';
class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.previewImage = this.previewImage.bind(this);
    }

    showModal() {
        $('#story-modal').show();
    }
    hideModal() {
        $('#story-modal').hide();
    }
    previewImage(input, placeToInsertImagePreview) {

        placeToInsertImagePreview = $('#previewImage');
            if(input.files) {
                var filesAmount = input.files.length;

                for (var i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
    
                    reader.onload = function(event) {
                        $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                    }
    
                    reader.readAsDataURL(input.files[i]);
                }
            }
            }
    
    render() {
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
                            <span className="block capitalize font-semibold dark:text-gray-100"> Johnson smith </span>
                        </div>

                    </div>

                    <div className="py-3 px-4 space-y-3">


                        <div className="bg-gray-100 bg-gray-100 rounded-full rounded-md relative dark:bg-gray-800">
                            <input type="text" placeholder="What's on your mind?" className="bg-transparent max-h-10 shadow-none" onClick={this.showModal} />

                        </div>
                        <hr></hr>
                        <div className="flex space-x-4 lg:font-bold">

                            <a href="#" className="bg-white py-2 px-4 rounded shadow" >Image/Video</a>
                        </div>
                    </div>
                </div>

                <div id="story-modal" className="uk-modal-container uk-modal uk-open" uk-modal style={{ display: 'none' }}>
                    <div className="uk-modal-dialog story-modal">
                        <button onClick={this.hideModal} className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white uk-icon uk-close" type="button" uk-close><svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" strokeWidth="1.1" x1={1} y1={1} x2={13} y2={13} /><line fill="none" stroke="#000" strokeWidth="1.1" x1={13} y1={1} x2={1} y2={13} /></svg></button>

                        <div className="flex-1 bg-white dark:bg-gray-900 dark:text-gray-100">
                            {/* post header*/}
                            <div >
                                <br></br>
                                <h1 style={{ textAlign: 'center', fontSize: '20px' }}><b>Create Post</b></h1>
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

                                    <span className="block text-lg font-semibold"> Johnson smith </span>
                                    <select style={{ width: '100px', height: '30px' }}>

                                        <option>Public</option>
                                        <option>Private</option>
                                    </select>
                                </div>
                                <br></br>
                                <textarea rows={4} cols={50} defaultValue={""} style={{ resize: 'none' }} />
                                <div className="py-4 ">
                                    <div className="flex justify-around">

                                        <div className="flex space-x-4 lg:font-bold">

                                            <input type="file" classname="bg-white py-2 px-4 rounded shadow"  multiple/>
                                        </div>

                                    </div>


                                </div>
                                <div className="py-4 " id="previewImage">

                                




                                </div>
                         

                            </div>
                            </div>
                            </div>
                      
                            </div></div>
                        
                            <div style={{ textAlign: 'center' }}>
                                <button style={{ width: '95%', backgroundColor: '#1877F2', margin: '0 auto', color: 'white', borderRadius: '5px', height: '40px' }}><b>Post</b></button>
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