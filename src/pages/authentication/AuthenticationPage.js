import React from 'react';
import SignInContainer from '../../containers/authentication/SignInContainer';
import './AuthenticationPage.scss';

const AuthenticationPage = props => {
    return (
        <div className='authentication-page'>
            <SignInContainer />
        </div>
    )   
}


export default AuthenticationPage;