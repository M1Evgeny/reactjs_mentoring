import React from 'react';
import './DeleteModal.css';

export const DeleteModal = (props) => {
    return (
        <div className="modal-background" onClick={(e) => props.handleModalClose(e)} style={{height: document.body.scrollHeight}}>
            <div className="delete-modal-card">
                <div className="modal__close">
                    <button type="button" className="close" title="Close" >X</button>
                </div>
                <h1 className="modal-title">DELETE MOVIE</h1>
                <p className="delete-modal-text">Are you sure you want to delete this movie?</p>
                <form className="modal-form">
                    <p className="modal-buttons">
                        <input className="modal-submit" type="submit" value="confirm" />
                    </p>
                </form>
            </div>
        </div>
    )
}
