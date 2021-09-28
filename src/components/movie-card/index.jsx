import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeleteModal from '../delete-modal';
import ModalWindow from '../modal-window';
import { useId } from '../../pages/home-page/id-context';

import styles from './MovieCard.module.css';

export const MovieCard = (props) => {
    const [movieId, setMovieId] = useId();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteModalHeight, setDeleteModalHeight] = useState(0);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editModalHeight, setEditModalHeight] = useState(0);

    const handleDeleteModalClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass === 'modal-background' || currentClass === 'close') {
            setShowDeleteModal(false);
        };
    };

    const handleEditModalClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass === 'modal-background' || currentClass === 'close') {
            setShowEditModal(false);
        };
    };

    const handleModalOpen = (e) => {
        e.preventDefault();
        const buttonId = e.target.id;
        if(buttonId === 'delete-button'){
            setShowDeleteModal(true);
            setDeleteModalHeight(document.body.scrollHeight);
        }
        if(buttonId === 'edit-button'){
            setShowEditModal(true);
            setEditModalHeight(document.body.scrollHeight);
        }
    };

    let genreList = props.genres;;
    if(props.genres.length > 0){
        genreList = props.genres.join(', ');
    }

    return (
        <article className={styles.filmCard} key={props.id} onClick={() => setMovieId(props.id)} >
            <div className={styles.hamburger_menu}>
                <input id={`menu__toggle${props.id}`} className={styles.menu__toggle} type="checkbox" />
                <label className={styles.menu__btn} htmlFor={`menu__toggle${props.id}`}>
                    <span></span>
                </label>
                <ul className={styles.menu__box}>
                    <li><a id="edit-button" className={styles.menu__item} href="#" onClick={(e) => handleModalOpen(e)} >Edit</a></li>
                    <li><a id="delete-button" className={styles.menu__item} href="#" onClick={(e) => handleModalOpen(e)} >Delete</a></li>
                </ul>
            </div>
            <img src={props.poster_path} className={styles.card_img_top} alt="..." />
            <div className={styles.card_body}>
                <span className={styles.filmTitle}>{props.title}</span>
                <span className={styles.filmYear}>{props.release_date}</span>
                <p className={styles.card_text}>{genreList}</p>
            </div>
            <ModalWindow show={showEditModal} handleModalClose= {handleEditModalClose} modalHeight={editModalHeight} modalTitle={'EDIT MOVIE'} id={props.id} /> 
            <DeleteModal show={showDeleteModal} handleModalClose= {handleDeleteModalClose} modalHeight={deleteModalHeight} /> 
        </article>
    )
}

MovieCard.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
}

MovieCard.defaultProps = {
    image: 'https://picsum.photos/322/455',
    genres: []
};
