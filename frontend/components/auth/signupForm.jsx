import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user)
    }

    renderErrors() {
        if (this.props.errors !== undefined ) {
            return (
                <ul className="session-erros-list">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <div></div>
        }
    }

    render() {
        return (
            <div className="signup-form">
                <h3>
                    Sign Up
                </h3>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    {this.renderErrors()}
                    <fieldset>
                        <div className="input-names">
                            <div className="input-container">
                                <label>First name</label>
                                    <input 
                                        type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                        className="signup-name-input"
                                        placeholder="First name"
                                        required
                                    />
                            </div>
                            <div className="input-container">
                                <label>Last name</label>
                                    <input
                                        type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                        className="signup-name-input"
                                        placeholder="Last name"
                                        required
                                    />
                            </div>
                        </div>
                        <label>Email</label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="Email"
                                required
                            />

                        <label>Password</label>
                            <p>Must be at least 6 characters</p>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password"
                                required
                            />
                    </fieldset>
                    <div className="signup-submit-container">
                        <input className="signup-submit" type="submit" value="Sign up" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;
