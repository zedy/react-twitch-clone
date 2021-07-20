import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, content, actions, streamTitle, isActive }) => {
  return ReactDOM.createPortal(
    <div className={`${isActive} ui dimmer modals visible`}>
      <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{ title }</div>
        <div className="content">{ content } <b>{ streamTitle }</b></div>
          { actions }
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default Modal;