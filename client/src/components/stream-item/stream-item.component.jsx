import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectUserId } from '../../redux/auth/auth.selectors';
import Button from '../buttons/button.component';

const StreamItem = ({ stream: {title, id, userId, description}, currentUserId }) => {
  
  const renderButtons = streamUserId => {
    if (currentUserId !== 'undefined' && currentUserId === streamUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${id}`} className="ui button primary">Edit</Link>
          <Button className="ui button primary negative">Delete</Button>
        </div>
      )
    }
  }

  return (
    <div className="item">
      {renderButtons(userId)}
      <i className="large middle aligned icon camera"></i>
      <div className="content">
        {title}
        <div className="description">
          {description}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUserId: selectUserId(state)
})

export default connect(mapStateToProps)(StreamItem);