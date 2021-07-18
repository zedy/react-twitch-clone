import React from 'react';
import Button from "./button.component";

const GoogleButton = ({ status, ...otherProps }) => {
    return (
        <Button className="ui red button" {...otherProps} >
            <i className="google icon"></i>
            { status ? 'Sign out' : 'Sign in'}
        </Button>
    )
};

export default GoogleButton;