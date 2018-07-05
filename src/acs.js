import React, { Component } from 'react';
class CreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        source_code: "",
        language_id: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sourceCode = this.sourceCode.bind(this);
    this.languageId = this.languageId.bind(this);
  }

  sourceCode(event){
      this.setState({
         source_code: event.target.value 
      })
  }

  languageId(event){
      this.setState({
         language_id: event.target.value 
      })
  }

  handleSubmit(event){
      event.preventDefault();
      var source_code = this.state.source_code;
    
      var language_id = this.state.language_id;
   
      fetch('https://api.judge0.com/submissions/?base64_encoded=false&wait=true', {
        method: 'POST',
        body: JSON.stringify({source_code,language_id}),
        headers: {'Content-Type' : 'application/json'}
      }).catch(err =>{
        alert(err);
      })
  } 

  render() {
      return (
      <div className="CreateComponent">
        <form onSubmit={this.handleSubmit}>
        <textarea name = "sourceCode" value={this.state.sourceCode} onChange={this.sourceCode}></textarea>
        <input value={this.state.language_id} onChange={this.languageId}></input>
        <button>Submit</button>
        </form>
      </div>
      );
    }
}

export default CreateComponent;
