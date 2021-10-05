import React from 'react';

export const SuccessModal = (props) => {
    return (
        <div hidden={props.hidden} className="modal-background" onClick={(e) => props.handleModalClose(e)} style={{height: document.body.scrollHeight}}>
            <div className="delete-modal-card">
                <div className="modal__close">
                    <button type="button" className="close" title="Close" >X</button>
                </div>
                <h1 className="modal-title">congratulations !</h1>
                <p className="delete-modal-text">The movie has been added to database successfully </p>
            </div>
        </div>
    )
}
