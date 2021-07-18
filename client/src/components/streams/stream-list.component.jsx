import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStreamsUtil } from '../../utils/streams';
import { FetchAllStreams } from '../../redux/streams/streams.actions';
import { selectAllStreams } from '../../redux/streams/streams.selectors';

import StreamItem from '../stream-item/stream-item.component';

const StreamList = ({ allStreams, putStreamsInState }) => {

    useEffect(() => {
        (async () => {
            const data = await fetchStreamsUtil();
            putStreamsInState(data);
        })();      
    }, [putStreamsInState])

    const renderList = streams => {
        if (!streams) return null;

        const streamItems = Object.values(streams);
       
        return streamItems.map(item => {
            return <StreamItem key={item.id} stream={item} />
        });
    }

    return (
        <div className="ui celled list">
            {renderList(allStreams)}
        </div>
    )
};

const mapStateToProps = state => ({
    allStreams: selectAllStreams(state),
})

const mapDispatchToProps = dispatch => ({    
    putStreamsInState: data => dispatch(FetchAllStreams(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);