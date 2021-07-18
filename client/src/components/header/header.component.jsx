// libs
import React from 'react';
import { Link } from 'react-router-dom';

// components
import GoogleAuth from '../oauth/google-auth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <div className="right menu">
                <Link to="/" className="item">All streams</Link>            
                {/* TODO: if user logged in then show create */}
                <Link to="/streams/create" className="item">
                    Create
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
};

export default Header;