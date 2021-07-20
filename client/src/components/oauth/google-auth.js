// libs
import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// components
import GoogleButton from '../buttons/google-button.component';

// actions
import { SignIn, SignOut } from '../../redux/signin/signin.actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
    const authStatus = () => {
        if (isSignedIn === null) {
            return null;
        }

        return <GoogleButton onClick={updateStatus} status={isSignedIn} />
    }

    {/* TODO: refactor component using lib react-google-login */}

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            const googleConfig = {
                scope: 'email',
                client_id: process.env.REACT_APP_OAUTH_CLIENT_ID
            }
            
            window.gapi.client.init(googleConfig).then(() => {
                const googleAuth = window.gapi.auth2.getAuthInstance();

                //setAuth(googleAuth);

                window.z = googleAuth;

                // setAuth(state => {
                //     console.log(state);
                //     signinChanged(state.isSignedIn.get());
                //     state.isSignedIn.listen(signinChanged);

                //     return state;
                // });
   
                signinChanged(window.z.isSignedIn.get(), window.z.currentUser.get().getId());
                window.z.isSignedIn.listen(signinChanged);
            }).catch(error => {
                console.log(error);
            })
        });
    }, []);

    const signinChanged = (isSignedIn, id = null) => {
        if (isSignedIn) {
            signIn(id ? id : window.z.currentUser.get().getId());
        } else {
            signOut();
        }
    }

    const updateStatus = () => {
        if (!isSignedIn) {
            window.z.signIn();
        } else {
            window.z.signOut();
        }
    }

    return (
        <div>
            { authStatus() }
        </div>
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