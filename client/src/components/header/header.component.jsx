// libs
import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

// components
import GoogleAuth from '../oauth/google-auth';
import Language from "../language/language.components";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <i className="icon home"></i>
            </Link>

            <Language />
            
            <div className="right menu">
                <Link to="/" className="item">All streams</Link>            
                {/* TODO: if user logged in then show create | context */}
                <Link to="/streams/create" className="item">
                    Create
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
};

export default Header;