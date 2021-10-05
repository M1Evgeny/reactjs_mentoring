import React from 'react';
import './AddMovieButton.css';
import { useModal } from '../context/modal-context';

export const AddMovieButton = () => {
    const [{ setModalObject }] = useModal();
    const handleModalOpen = () => setModalObject({modalType: 'add-movie'});

    return (
        <div>
            <button type="button" className="addMovie" onClick={() => handleModalOpen()}>
                + add movie 
            </button>
        </div>
    )
}