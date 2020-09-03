import React from 'react';
import SignInContainer from '../../containers/authentication/SignInContainer';
import SignUpContainer from '../../containers/authentication/SignUpContainer';
import './AuthenticationPage.scss';

const AuthenticationPage = props => {
    return (
        <div className='authentication-page'>
            <SignInContainer />
            <SignUpContainer />
        </div>
    )   
}


export default AuthenticationPage;