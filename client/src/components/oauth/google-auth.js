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
        console.log('1');
        window.gapi.load('client:auth2', () => {
            console.log('2');
            const googleConfig = {
                scope: 'email',
                client_id: process.env.REACT_APP_OAUTH_CLIENT_ID
            }
            
            window.gapi.client.init(googleConfig).then(() => {
                console.log('3');
                const googleAuth = window.gapi.auth2.getAuthInstance();

                // setAuth(googleAuth);
                // setAuth(state => {
                //     console.log(auth);
                //     signinChanged(state.isSignedIn.get());
                //     state.isSignedIn.listen(signinChanged);

                //     return state;
                // });
   
                signinChanged(googleAuth.isSignedIn.get(), googleAuth.currentUser.get().getId());
                googleAuth.isSignedIn.listen(signinChanged);
            }).catch(error => {
                console.log(error);
            })
        });
    }, []);

    const signinChanged = (isSignedIn, id) => {
        if (isSignedIn) {
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