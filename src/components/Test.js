

import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching : false,
            users : []
        }
        
    }

    async componentDidMount() {
          
    const url = "http://207.148.74.251:8080/api/user/all";
    const response =  await fetch(url, {
           method :'GET',  
           headers : new Headers ({
               'Content-Type': 'application/json',
               'Authorization':'Basic '+btoa('admin:taibong123'),
           })
       });
       const data = await response.json();
    
      this.setState ({
          isFetching : true,
          users : data,
      })

       
       console.log(this.state);
     
      


     
    
    }

    render() {
        
        
        return (
            <div>
                {this.state.isFetching  ?(
                    <div>
                         <h1>{this.state.users[0].username}</h1>
                          
                    </div>
                   
         

                ):(

                   <h2>ABCD</h2>

                )}
              
            
            </div>
        );
    }
}

export default Test;