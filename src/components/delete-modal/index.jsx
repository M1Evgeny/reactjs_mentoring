import React from 'react';
import './DeleteModal.css';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div hidden={!this.props.show} className="modal-background" onClick={(e) => this.props.handleModalClose(e)} style={{height: this.props.modalHeight}}>
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

}

export default DeleteModal;