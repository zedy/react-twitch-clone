import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamForm = props => {
    const renderError = ({ error, touched }) => {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    const renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{ label }</label>
                <input {...input} autoComplete="off"/>
                {renderError(meta)}
            </div>
        )
    }

    const onSubmit = formValues => {
        props.onSubmit(formValues);
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui error form">
            <Field name="title" component={renderInput} label="Enter title"/>
            <Field name="description" component={renderInput} label="Enter description"/>
            <button className="ui button teal" type="submit">Submit</button>
        </form>
    )
};

const validate = (formValues) => {
    const errors = {};
    
    if (!formValues.title) {
        errors.title = 'Title is mandatory';
    } 
    
    if (!formValues.description) {
        errors.description = 'Description is mandatory';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
