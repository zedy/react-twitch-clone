import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchStreamsUtil } from '../../utils/streams';
import { FetchAllStreams } from '../../redux/streams/streams.actions';
import { selectAllStreams } from '../../redux/streams/streams.selectors';
import StreamItem from '../stream-item/stream-item.component';
import { selectUserId } from '../../redux/auth/auth.selectors';

import { deleteStreamUtil } from '../../utils/streams';
import Modal from '../modals/modal.component';

const StreamList = ({ allStreams, putStreamsInState, currentUserId }) => {
    const [activeModalStatus, setActiveModalStatus] = useState(false);
    const [activeModalStreamTitle, setActiveModalStreamTitle] = useState(null);
    const [activeModalStreamId, setActiveModalStreamId] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await fetchStreamsUtil();
            putStreamsInState(data);
        })();      
    }, [putStreamsInState, currentUserId])

    const renderList = streams => {
        if (!streams) return null;
       
        return streams.map(item => {
            return <StreamItem onClick={showModal} key={item.id} stream={item} />
        });
    }

    const renderCreateStreamButton = () => {
        return currentUserId ? <Link to="/streams/create" className="ui button secondary right floated">Create new stream</Link> : null;
    }

    const showModal = (title, id) => {
        setActiveModalStreamId(id)
        setActiveModalStreamTitle(title);
        setActiveModalStatus(true);
    }

    const deleteStream = async () => {
        const response = await deleteStreamUtil(activeModalStreamId);
        
        if (response.status === 200) {
            // TOASTR message here
        } else {
            // TOASTR message here
        }
    }; 

    const hideModal = caller => {        
        setActiveModalStatus(false);

        if (caller === 'delete') {      
            deleteStream();     
        }

        setActiveModalStreamId(null);
        setActiveModalStreamTitle(null);
    }

    const actions = (
        <div className="actions">
          <button onClick={() => {hideModal('delete')}} className="ui button red">Delete</button>
          <button onClick={() => {hideModal('cancel')}} className="ui button">Cancel</button>
        </div>
    );

    return (
        <div className="ui celled list">
            <h2>All streams</h2>
            {renderList(allStreams)}
            {renderCreateStreamButton()}

            <Modal 
                title="Confirm"
                content="Are you sure you want to delete stream: ?"
                actions={actions}
                isActive={activeModalStatus ? 'active' : null}
                streamTitle={activeModalStreamTitle}
            />
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