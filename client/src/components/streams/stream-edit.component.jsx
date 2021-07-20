import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStreamUtil } from '../../utils/streams';
import StreamForm from './stream-form.component';
import { editStreamUtil } from '../../utils/streams';
import { selectUserId } from '../../redux/auth/auth.selectors';

const StreamEdit = ({ match, userId, history }) => {
    const [stream, setStream] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetchStreamUtil(match.params.id);

            setStream(response.data);
        })();      
    }, [])

    const onSubmit = async formValues => {
        const response = await editStreamUtil(stream.id, formValues);

        {/* TODO: integrate toastr and refactor response */}

        if (response.status !== 200) {
            alert('something wrong');
        } else {
            alert('edited ' + response.data.title + ' stream');
            history.push('/');
        }
    }

    if (!stream) {
        return 'Loading ...';
    }

    return (
        <div>
            <h2>Edit stream</h2>
            <StreamForm 
                onSubmit={onSubmit} 
                initialValues={{ title: stream.title, description: stream.description }}
            />
        </div>
    )
};

const mapStateToProps = state => ({
    userId: selectUserId(state)
})

export default connect(mapStateToProps)(StreamEdit)