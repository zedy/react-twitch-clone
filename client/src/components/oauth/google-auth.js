// libs
import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// components
import GoogleButton from '../buttons/google-button.component';

// actions
import { SignIn, SignOut } from '../../redux/signin/signin.actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
    const [auth, setAuth] = useState(null);

    const authStatus = () => {
        if (isSignedIn === null) {
            return null;
        }

        return <GoogleButton onClick={updateStatus} status={isSignedIn} />
    }

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            const googleConfig = {
                scope: 'email',
                client_id: process.env.REACT_APP_OAUTH_CLIENT_ID
            }
            
            window.gapi.client.init(googleConfig).then(() => {
                const googleAuth = window.gapi.auth2.getAuthInstance();
                const status = googleAuth.isSignedIn.get();
                setAuth(googleAuth);
                onAuthChange(status, googleAuth.currentUser.get().getId());
                googleAuth.isSignedIn.listen(onAuthChange);
            }).catch(error => {
                console.log(error);
            })
        });
    }, []);

    const onAuthChange = (status, id) => {
        if (status) {
            signIn(id);
        } else {
            signOut();
        }
    }

    const updateStatus = () => {
        if (!isSignedIn) {
            auth.signIn();
        } else {
            auth.signOut();
        }
    }

    return (
        <div>{ authStatus() }</div>
    )
};

const mapStateToProps = state => ({
    isSignedIn: state.auth.signedIn
})

const mapDispatchToProps = dispatch => ({
    signIn: userId => dispatch(SignIn(userId)),
    signOut: () => dispatch(SignOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);