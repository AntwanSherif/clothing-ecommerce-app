import React, { Component } from 'react'
import FormInput from '../../components/common/form-input/FormInput';
import Button from '../../components/common/button/Button';
import './SignInContainer.scss';

export default class SignInContainer extends Component {
    state = { email: '', password: '' }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        required
                        name='email'
                        label='Email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                    />
                    
                    <FormInput
                        required
                        name='password'
                        label='Password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                    />

                    <Button type='submit'>Sign in</Button>
                </form>
            </div>
        )
    }
}
