import React from 'react';
import './MovieList.css';
import MovieCard from '../movie-card';

const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
            {movies.map(({ title, release_date, genres, poster_path, id }) => (
                <MovieCard title={title} poster_path={poster_path} release_date={release_date} genres={genres} key={id}/>
            ))}
        </div>
    )
}

export default MovieList;