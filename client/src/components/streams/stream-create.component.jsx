import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { CreateStream } from '../../redux/streams/streams.actions';
import { createStreamUtil } from '../../utils/streams';
import { selectUserId } from '../../redux/auth/auth.selectors';

const StreamCreate = props => {
    const renderError = ({ error }) => {
        if (error) {
            return (
                <div className="ui error message">
                    {error}
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

    const onSubmit = async formValues => {
        const response = await createStreamUtil(props.userId, formValues);

        if (response.status !== 201) {
            alert('something wrong');
        } else {
            alert('created ' + response.data.title + ' stream');
            console.log(response.data);
            props.createStream(response.data);
        }
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui error form">
            <Field name="title" component={renderInput} label="Enter title"/>
            <Field name="description" component={renderInput} label="Enter description"/>
            <button type="submit">Submit</button>
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

const mapStateToProps = state => ({
    userId: selectUserId(state)
})

const mapDispatchToProps = dispatch => ({
    createStream: formValues => dispatch(CreateStream(formValues))
});

const wrappedForm = reduxForm({
    form: 'streamCreateForm',
    validate
})(StreamCreate);

export default connect(mapStateToProps, mapDispatchToProps)(wrappedForm)