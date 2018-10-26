import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.submit}>
              <label>
                Name:
                  <input 
                    type="text" 
                    name="name" 
                    value={this.props.name} 
                    onChange={this.props.changeInput} 
                  />
                  <br/>
                Age:
                  <input 
                    type="number" 
                    name="age" 
                    value={this.props.age} 
                    onChange={this.props.changeInput} 
                  />
              </label>
              <input type="submit" value="Submit" />
            </form>
        )
    }  
}

export default Form;