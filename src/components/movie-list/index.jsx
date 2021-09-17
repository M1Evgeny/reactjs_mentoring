import React from 'react';
import './MovieList.css';
import MovieCard from '../movie-card';

const MovieList = ({movies}) => {
    return (
        <div>
            {movies.map(({ title, release_date, genres, poster_path, id }) => (
                <div key={id}>
                    <MovieCard title={title} poster_path={poster_path} release_date={release_date} genres={genres}/>
                </div>
            ))}
        </div>
    )
}

export default MovieList;