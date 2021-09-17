import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({poster_path, title, release_date, genres}) => {
    return (
        <article className="filmCard">
            <img src={poster_path} className="card-img-top" alt="..." />
            <div className="card-body">
                <span className="filmTitle">{title}</span>
                <span className="filmYear">{release_date}</span>
                <p className="card-text">{genres.join(', ')}</p>
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
    image: 'https://picsum.photos/322/455'
};

export default MovieCard;