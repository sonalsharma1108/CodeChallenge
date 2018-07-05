import React, { Component } from 'react';
import './style.css';

export default class SubmissionResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stdout: "",
            stderr: '',
            compile_output: '',
            expected_output: '',
            message: '',
            exit_code: 0,
            exit_signal: 0,
            data: [],
        };
    }
    componentDidMount(){
      
        fetch('https://api.judge0.com/submissions/91b1b51c-136e-4973-9666-3fff52c0d30b', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              data:responseJson,
              
            });
            var k=this.state.data;
            console.log(k,"data");
           
          })
        
                    .catch(err => {
                        alert(err);
                    });
          }
      

    render() {
        return (
            <div>

                {
                 

                     
          this.state.data.map((value,key)=>{
          
      
            
            
             
            {value.stderr}
          
    }


            

          )
        
          
                }

            </div>
        )
    }
}