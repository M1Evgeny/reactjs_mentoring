import React from 'react';

const SuccessModal = (props) => {
    return (
        <div hidden={!props.show} className="modal-background" onClick={(e) => props.handleModalClose(e)} style={{height: props.modalHeight}}>
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

export default SuccessModal;