import React, { Component } from 'react';

class ImageSmall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            srcImage :"",
        }
    }
    componentDidMount() {
        this.getImage();

    }
 
async getImage() {
   
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    var idImage = this.props.idImage;
    const url ="http://207.148.74.251:8080/nonauth/api/image/"+idImage;

    fetch(url, {
        method: 'GET',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Basic ' + btoa(username + ":" + password),
        }),
      })
        .then(response => response.blob())
        .then(blobConvert =>  {
            let reader = new FileReader();
            reader.onload = () => {
                var srcImage = reader.result;
               this.setState({srcImage})
            }
            reader.readAsDataURL(blobConvert)
            
        })
       
      
}
    render() {
        var src = this.state.srcImage;
        return (
            <a href="assets/images/post/img10.jpg">
            <img src={src} alt="" className="rounded-md w-full h-full" />
          </a>
        );
    }
}

export default ImageSmall;