import React, { useState, useEffect } from 'react';
import './ModalWindow.css';
import stubs from '../movie-list-container/mockedMovies.json';
import SuccessModal from '../success-modal';

const ModalWindow = (props) => {
    const[id, setId]= useState(props.id ? props.id : 0);
    const[title, setTitle]= useState('');
    const[releseDate, setReleseDate]= useState('');
    const[movieUrl, setMovieUrl]= useState('');
    const[rating, setRating]= useState('');
    const[runtime, setRuntime]= useState('');
    const[overview, setOverview]= useState('');
    const[showAddedMovieModal, setShowAddedMovieModal]= useState(false);
    const[modalHeight, setModalHeight]= useState(0);

    useEffect(() => {
        if(id !== 0){
            const movie = stubs.filter(movie => movie.id === id)[0];
            setTitle(movie.title);
            setReleseDate(movie.release_date);
            setMovieUrl(() => movie.movieUrl ? movie.movieUrl : '');
            setRating(movie.vote_average);
            setRuntime(movie.runtime);
            setOverview(movie.overview);
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        if(props.modalTitle === 'ADD MOVIE'){
            props.handleModalCloseAfterSuccess();
            setShowAddedMovieModal(true);
            setModalHeight(document.body.scrollHeight);
        }
    }

    const handleModalClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass === 'modal-background' || currentClass === 'close') {
            setShowAddedMovieModal(false);
        };
    };
    
    return ( 
        <>
            <div hidden={!props.show} className="modal-background" onClick={(e) => props.handleModalClose(e)} style={{height: props.modalHeight}}>
                <div className="modal-card">
                    <div className="modal__close">
                        <button type="button" className="close" title="Close" >X</button>
                    </div>
                    <h1 className="modal-title">{props.modalTitle}</h1>
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <fieldset className="modal-fieldset">
                            <label className="modal-label">
                                Title
                                <input type="text" name="title" placeholder="Title" value={title} onChange={setTitle} />
                            </label>
                            <label className="modal-label-second">
                                RELEASE DATE
                                <input type="date" name="releseDate" placeholder="yyyy-mm-dd" value={releseDate} onChange={setReleseDate} />
                            </label>
                        </fieldset>
                        <fieldset className="modal-fieldset">
                            <label className="modal-label">
                                movie url
                                <input type="url" name="movieUrl" placeholder="https:///" value={movieUrl} onChange={setMovieUrl} />
                            </label>
                            <label className="modal-label-second">
                                RATING
                                <input type="number" name="rating" placeholder="7.8" value={rating} onChange={setRating} />
                            </label>
                        </fieldset>
                        <fieldset className="modal-fieldset">
                            <label className="modal-label">
                                genre
                                <select multiple>
                                    <option value="crime" defaultValue>crime</option>
                                    <option value="horror" defaultValue>horror</option>
                                </select>
                            </label>
                            <label className="modal-label-second">
                                RUNTIME
                                <input type="number" name="runtime" placeholder="minutes" value={runtime} onChange={setRuntime} />
                            </label>
                        </fieldset>
                        <fieldset className="modal-fieldset">
                            <label className="modal-label">
                                OVERVIEW
                                <textarea className="overview-input" type="text" name="overview" placeholder="Movie description" value={overview}  onChange={setOverview} />
                            </label>
                        </fieldset>
                        <p className="modal-buttons">
                            <input className="modal-reset" type="reset" value="reset" />
                            <input className="modal-submit" type="submit" value="submit" />
                        </p>
                    </form>
                </div>
            </div>
            <SuccessModal show={showAddedMovieModal} handleModalClose= {handleModalClose} modalHeight={modalHeight} />
        </>
    )
}

export default ModalWindow;