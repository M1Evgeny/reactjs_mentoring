import React, {useState} from 'react';
import styles from './FullMovieCard.module.css';
import Logo from '../logo';

function FullMovieCard(props) {


    let genreList = props.movie.genres;
    if(props.movie.genres.length > 0){
        genreList = props.movie.genres.join(' & ');
    }

    const releaseYear = new Date(props.movie.release_date).getFullYear();
    const hours = Math.floor(props.movie.runtime / 60);
    const mins = Math.floor(props.movie.runtime % 60);
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo styleName='header-logo'/>
                <button type="button" className={styles.searchButton}>
                    <svg viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </div>
            <article className={styles.article}>
                <img src="https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg" className={styles.card_img_top} alt="..."/>
                <section className={styles.section}>
                    <p>
                        <span className={styles.movie_title}>{props.movie.title}</span>
                        <span className={styles.movie_rating}>{props.movie.vote_average}</span>
                    </p>
                    <p className={styles.genre_list}>{genreList}</p>
                    <p>
                        <span className={styles.release_date}>{releaseYear}</span>
                        <span className={styles.release_date}>{hours}h {mins}min</span>
                    </p>
                    <p className={styles.movie_overview}>{props.movie.overview}</p>
                </section>
            </article>
        </header>
    )
}

export default FullMovieCard;