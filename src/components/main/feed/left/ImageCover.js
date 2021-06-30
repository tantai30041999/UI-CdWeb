import React, { Component } from 'react';

class ImageCover extends Component {
    constructor(props) {
        super(props)
        this.state = {

            srcImage: "",
            updateComponent: false,

        }

    }

    componentDidMount() {
        this.getImage();
        this.props.exitUpdateComponent();

    }

    async getImage() {

        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');
        var idImage = this.props.idImage;

        const url = "http://207.148.74.251:8080/nonauth/api/image/" + idImage;

        await fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            }),
        })
            .then(response => response.blob())
            .then(blobConvert => {
                if (blobConvert != null) {
                    let reader = new FileReader();
                    reader.onload = () => {
                        var srcImage = reader.result;
                        this.setState({ srcImage })


                    }
                    reader.readAsDataURL(blobConvert)
                }
            })



    }


    render() {
        var update = this.props.updateComponent;
        if (update == true) {
            this.getImage();
        }

        return (

            <a href="assets/images/post/img9.jpg" className="col-span-2">
                <img src={this.state.srcImage} alt="" className="rounded-md w-full lg:h-76 object-cover" />
            </a>

        );
    }
}

export default ImageCover;