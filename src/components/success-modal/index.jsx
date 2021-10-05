import React from 'react';

export class SuccessModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div hidden={this.props.hidden} className="modal-background" onClick={(e) => this.props.handleModalClose(e)} style={{height: document.body.scrollHeight}}>
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

}
