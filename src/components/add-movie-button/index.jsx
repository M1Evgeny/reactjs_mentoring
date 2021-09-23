import React from 'react';
import './AddMovieButton.css';
import ModalWindow from '../modal-window';

class AddMovieButton extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            modalHeight: 0
        };
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleModalCloseAfterSuccess = this.handleModalCloseAfterSuccess.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
    }

    handleModalClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass === 'modal-background' || currentClass === 'close') {
            this.setState({showModal: false});
        };
    };

    handleModalCloseAfterSuccess = () => this.setState({showModal: false});

    handleModalOpen = () => {
        this.setState({
            showModal: true,
            modalHeight: document.body.scrollHeight
        });
    };


   render(){
       return (
        <div>
            <button type="button" className="addMovie" onClick={() => this.handleModalOpen()}>
                + add movie 
            </button>
            <ModalWindow show={this.state.showModal} handleModalClose= {this.handleModalClose} modalHeight={this.state.modalHeight} 
                modalTitle={'ADD MOVIE'} handleModalCloseAfterSuccess= {this.handleModalCloseAfterSuccess} />
        </div>
    )
   }
}

export default AddMovieButton;