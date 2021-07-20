import React from 'react';

import Modal from '../modals/modal.component';
import history from '../../utils/history';

const StreamDelete = () => {
    const actions = (
        <div className="actions">
          <button className="ui button red">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
    );

    return (
        <div>
            Stream StreamDelete
            <Modal 
                title="Delete stream"
                content="Are you sure?"
                actions={actions}
                onclick={() => history.push('/')}
            />
        </div>
    )
};

export default StreamDelete;