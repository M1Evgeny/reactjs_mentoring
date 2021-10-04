import React from 'react';
import PropTypes from 'prop-types';
import { useModal } from '../context/modal-context';
import styles from './MovieCard.module.css';

export const MovieCard = (props) => {
    const [modalObject, setModalObject] = useModal();

    const handleModalOpen = (e) => {
        e.preventDefault();
        const buttonId = e.target.id;
        if(buttonId === 'delete-button'){
            setModalObject({'modalType': 'delete-modal'})
        }
        if(buttonId === 'edit-button'){
            setModalObject({'modalType': 'edit-movie', 'id': props.id});
        }
    };

    return (
        <article className={styles.filmCard} key={props.id} >
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
                {props.genres.length > 0 && <p className="card-text">{props.genres.join(", ")}</p>}
            </div>
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