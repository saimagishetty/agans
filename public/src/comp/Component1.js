import React from "react";

import './Component1.css'

class Component1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
        };
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loggedIn: true },
            console.log(this.state)
        );
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="container">
                    <div class="login-page">
                        <div class="form">
                            <div class="login-form">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Email"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                <button type="submit">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default Component1;