import React, { useState, useEffect } from 'react';
import { useModal } from '../context/modal-context';
import './ModalWindow.css';
import stubs from '../movie-list-container/mockedMovies.json';

export const ModalWindow = (props) => {
    const { setModalObject } = useModal();
    const[id, setId]= useState(props.id ? props.id : 0);
    const[title, setTitle]= useState('');
    const[releseDate, setReleseDate]= useState('');
    const[movieUrl, setMovieUrl]= useState('');
    const[rating, setRating]= useState('');
    const[runtime, setRuntime]= useState('');
    const[overview, setOverview]= useState('');

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
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();
        if(props.modalTitle === 'ADD MOVIE'){
            setModalObject({modalType: 'success-modal'});
        }
    }
    
    return ( 
        <>
            <div hidden={props.hidden} className="modal-background" onClick={(e) => props.handleModalClose(e)} style={{height: document.body.scrollHeight}}>
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
                                <input type="url" name="movieUrl" placeholder="https://" value={movieUrl} onChange={setMovieUrl} />
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
        </>
    )
}
