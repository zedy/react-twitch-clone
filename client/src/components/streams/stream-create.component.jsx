import React from 'react';
import { connect } from 'react-redux';

import { CreateStream } from '../../redux/streams/streams.actions';
import { createStreamUtil } from '../../utils/streams';
import { selectUserId } from '../../redux/auth/auth.selectors';

import StreamForm from './stream-form.component';

const StreamCreate = ({ userId, createStream, history }) => {
    const onSubmit = async formValues => {
        const response = await createStreamUtil(userId, formValues);

        if (response.status !== 201) {
            alert('something wrong');
        } else {
            alert('created ' + response.data.title + ' stream');
            createStream(response.data);
            history.push('/');
        }
    }

    return (
        <div>
            <h2>Create stream</h2>
            <StreamForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = state => ({
    userId: selectUserId(state)
})

const mapDispatchToProps = dispatch => ({
    createStream: formValues => dispatch(CreateStream(formValues))
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamCreate)