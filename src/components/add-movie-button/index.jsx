import React, { useState } from 'react';
import './AddMovieButton.css';
import ModalWindow from '../modal-window';

const AddMovieButton = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalHeight, setModalHeight] = useState(0);


    const handleModalClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass === 'modal-background' || currentClass === 'close') {
            setShowModal(false);
        };
    };

    const handleModalCloseAfterSuccess = () => setShowModal(false);

    const handleModalOpen = () => {
        setShowModal(true);
        setModalHeight(document.body.scrollHeight);
    };

    return (
        <div>
            <button type="button" className="addMovie" onClick={() => handleModalOpen()}>
                + add movie 
            </button>
            <ModalWindow show={showModal} handleModalClose= {handleModalClose} modalHeight={modalHeight} 
                modalTitle={'ADD MOVIE'} handleModalCloseAfterSuccess= {handleModalCloseAfterSuccess} />
        </div>
    )
}

export default AddMovieButton;