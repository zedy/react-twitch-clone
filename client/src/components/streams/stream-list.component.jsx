import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchStreamsUtil } from '../../utils/streams';
import { FetchAllStreams } from '../../redux/streams/streams.actions';
import { selectAllStreams } from '../../redux/streams/streams.selectors';
import StreamItem from '../stream-item/stream-item.component';
import { selectUserId } from '../../redux/auth/auth.selectors';

const StreamList = ({ allStreams, putStreamsInState, currentUserId }) => {

    useEffect(() => {
        (async () => {
            const data = await fetchStreamsUtil();
            putStreamsInState(data);
        })();      
    }, [putStreamsInState, currentUserId])

    const renderList = streams => {
        if (!streams) return null;
       
        return streams.map(item => {
            return <StreamItem key={item.id} stream={item} />
        });
    }

    const renderCreateStreamButton = () => {
        return currentUserId ? <Link to="/streams/create" className="ui button secondary right floated">Create new stream</Link> : null;
    }

    return (
        <div className="ui celled list">
            <h2>All streams</h2>
            {renderList(allStreams)}
            {renderCreateStreamButton()}
        </div>
    )
};


const mapStateToProps = state => ({
    allStreams: selectAllStreams(state),
    currentUserId: selectUserId(state)
})

const mapDispatchToProps = dispatch => ({    
    putStreamsInState: data => dispatch(FetchAllStreams(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);