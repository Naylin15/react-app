import React, { Component } from 'react';
import Form from './Form';
import Message from './Message';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      mode: 'form',
    }
  }

  changeInput = (input) => {
    this.setState({
      [input.target.name]: input.target.value,
    })
  }

  submit = (form) => {
    form.preventDefault();

    if (this.state.name && this.state.age) {

      this.setState({
        mode: 'message'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { 
            this.state.mode === "form" 
            ? (
              <Form
                name={this.state.name}
                age={this.state.age}
                changeInput={this.changeInput}
                submit={this.submit}
              />
            )
            : (
              <Message
                name={this.state.name}
                age={this.state.age}
                return={() => this.setState({mode: 'form'})}
              />
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
