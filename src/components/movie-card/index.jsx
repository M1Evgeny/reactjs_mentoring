import React from 'react';
import PropTypes from 'prop-types';
import { DeleteModal } from '../delete-modal';
import { ModalWindow } from '../modal-window';

import styles from './MovieCard.module.css';

export class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteModal: false,
            deleteModalHeight: 0,
            showEditModal: false,
            editModalHeight: 0
        };
        this.handleDeleteModalClose = this.handleDeleteModalClose.bind(this);
        this.handleEditModalClose = this.handleEditModalClose.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
    }

    handleDeleteModalClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass === 'modal-background' || currentClass === 'close') {
            this.setState({showDeleteModal: false});
        };
    };

    handleEditModalClose = (e) => {
        const currentClass = e.target.className;
        if (currentClass === 'modal-background' || currentClass === 'close') {
            this.setState({showEditModal: false});
        };
    };

    handleModalOpen = (e) => {
        e.preventDefault();
        const buttonId = e.target.id;
        if(buttonId === 'delete-button'){
            this.setState({
                showDeleteModal: true,
                deleteModalHeight: document.body.scrollHeight
            });
        }
        if(buttonId === 'edit-button'){
            this.setState({
                showEditModal: true,
                editModalHeight: document.body.scrollHeight
            });
        }
    };

    render() {
        return (
            <article className={styles.filmCard} key={this.props.id}>
                <div className={styles.hamburger_menu}>
                    <input id={`menu__toggle${this.props.id}`} className={styles.menu__toggle} type="checkbox" />
                    <label className={styles.menu__btn} htmlFor={`menu__toggle${this.props.id}`}>
                        <span></span>
                    </label>
                    <ul className={styles.menu__box}>
                        <li><a id="edit-button" className={styles.menu__item} href="#" onClick={(e) => this.handleModalOpen(e)} >Edit</a></li>
                        <li><a id="delete-button" className={styles.menu__item} href="#" onClick={(e) => this.handleModalOpen(e)} >Delete</a></li>
                    </ul>
                </div>
                <img src={this.props.poster_path} className={styles.card_img_top} alt="..." />
                <div className={styles.card_body}>
                    <span className={styles.filmTitle}>{this.props.title}</span>
                    <span className={styles.filmYear}>{this.props.release_date}</span>
                    {this.props.genres.length > 0 && <p className="card-text">{this.props.genres.join(", ")}</p>}
                </div>
                <ModalWindow show={this.state.showEditModal} handleModalClose= {this.handleEditModalClose} modalHeight={this.state.editModalHeight} modalTitle={'EDIT MOVIE'} id={this.props.id} /> 
                <DeleteModal show={this.state.showDeleteModal} handleModalClose= {this.handleDeleteModalClose} modalHeight={this.state.deleteModalHeight} /> 
            </article>
        )
    }
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

