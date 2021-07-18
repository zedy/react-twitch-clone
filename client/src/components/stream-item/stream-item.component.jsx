import React from 'react';

const StreamItem = ({ stream: {title, id, description} }) => {
  
  return (
    <div className="item">
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

export default StreamItem;