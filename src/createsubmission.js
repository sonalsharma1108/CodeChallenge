import React, { Component } from 'react';
import './style.css';

class CreateComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            source_code: "",
            language_id: 4,
            stdin: '',
            expected_output: '',
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sourceCode = this.sourceCode.bind(this);
        this.languageId = this.languageId.bind(this);
        this.stdin = this.stdin.bind(this);
        this.expected_output = this.expected_output.bind(this);
    }
    stdin(ev) {
        this.setState({
            stdin: ev.target.value
        })
    }
    expected_output(ev) {
        this.setState({
            expected_output: ev.target.value
        });
    }

    sourceCode(event) {
        this.setState({
            source_code: event.target.value
        })
    }

    languageId(event) {
        this.setState({
            language_id: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { source_code, language_id, stdin, expected_output,data } = this.state;

        fetch('https://api.judge0.com/submissions/?wait=true', {
            method: 'POST',
            body: JSON.stringify({
                source_code,
                language_id,
                stdin,
                expected_output
            }),
            headers: { 'Content-Type': 'application/json' }
            
        }).then((response) => {
            console.log(response);
            this.setState({
                data: response,
            });
        }).catch(err => {
            alert(err);
        });

    }

    render() {
        return (
            <div className="CreateComponent">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.language_id} onChange={this.languageId}></input><br />
                    <textarea name="sourceCode" rows="14" cols="50" value={this.state.sourceCode} onChange={this.sourceCode}></textarea><br />

                    <input value={this.state.stdin} onChange={this.stdin} placeholder="stdin" />
                    <input value={this.state.expected_output} onChange={this.expected_output} placeholder="expected_output" />

                    <button>Submit</button>
                    <div>
                    {
                        this.state.data.map((value, i) =>{
                            <div>
                                <p>{value.stdout}</p>
                                <p>{value.stderr}</p>
                            </div>
                        }

                        )}
                </div>
                </form>
            </div>

        )

    }
}

export default CreateComponent;