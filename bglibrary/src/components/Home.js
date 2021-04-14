import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HOME</h2>
                <button onClick={this.props.auth.login}>Login</button>
            </div>
        );
    }
}

export default Home;