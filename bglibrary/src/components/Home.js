import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        //Shortens the method calls later in the file
        const { isAuthenticated, login } = this.props.auth;

        //Conditionally display Login button or Profile link if authenticated
        return (
            <div>
                <h2>HOME</h2>
                {isAuthenticated() ? (
                    <Link to='/profile'>View Profile</Link>
                ) : (
                    <button onClick={login}>Login</button>
                )}
            </div>
        );
    }
}

export default Home;