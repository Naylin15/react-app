import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <>
                <p>Hello { this.props.name }.</p>
                <p>Your age is { this.props.age  }, you are
                    { 
                        this.props.age >= 18 
                        ? ' adult'
                        : ' underage'
                    }
                </p>

                <button onClick={this.props.return}>
                    return
                </button>
            </>
        )
    }  
}

export default Message