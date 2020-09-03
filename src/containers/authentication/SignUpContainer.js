import React, { Component } from 'react'
import FormInput from '../../components/common/form-input/FormInput';
import Button from '../../components/common/button/Button';
import { auth, createUserProfile } from '../../firebase/firebaseUtils';
import './SignUpContainer.scss';

const initialState = { 
    displayName: '',
    email: '', 
    password: '',
    confirmPassword: '',
};

export default class SignUpContainer extends Component {
    state = { ...initialState };

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName });
            this.setState({ ...initialState });            
        } catch (error) {
            console.error(error);
        }

    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        required
                        name='displayName'
                        label='Display Name'
                        type='text'
                        value={displayName}
                        handleChange={this.handleChange}
                    />

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

                    <FormInput
                        required
                        name='confirmPassword'
                        label='Confirm Password'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                    />

                    <Button type='submit'>Sign up</Button>
                </form>
            </div>
        )
    }
}
