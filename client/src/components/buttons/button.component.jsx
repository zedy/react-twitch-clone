import React from 'react';

const Button = ({ children, className, ...otherProps }) => {
    return (
        <button className={className} {...otherProps}>{ children }</button>
    )
};

export default Button;