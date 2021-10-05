import React, { useState, useEffect } from 'react';
import './MovieListContainer.css';
import stubs from './mockedMovies.json';
import { MovieList } from '../movie-list';
import { Nav } from '../nav';
import { SubTitle } from '../sub-title';
import { Sort } from '../sort';
import { Filter } from '../filter';
import { EmptyComponent } from '../empty-component';

export const MovieListContainer = () => {
  const [genre, setGenre] = useState('all');
  const [sortParam, setSortParam] = useState('release_date');
  const [mockedMovies, setMockedMovies] = useState([]);


  const filterMovies = (movies) => {
    if (genre === 'all') return movies;
    return movies.filter((movie) => movie.genres.includes(genre));
  }

  const filterByGenre = (genre) => {
    setGenre(genre);
  }

  const applySortParam = (sortParam) => {
    setSortParam(sortParam);
  }

  const sortMovies = (movies) => {
    let copyOfMovies = movies.slice();
    if (sortParam === 'release_date') {
      return copyOfMovies.sort((a, b) => new Date(b[sortParam]) - new Date(a[sortParam]));
    }
      return copyOfMovies.sort((a, b) => b[sortParam] > a[sortParam] ? 1 : -1);
  }

  useEffect(() => {
    setMockedMovies(stubs);
  });

  const foundMovies = sortMovies(filterMovies(mockedMovies));
  const movieListMakrUp =() => <><SubTitle movieListLength = {foundMovies.length} /><MovieList movies={foundMovies} /></>;

    return (
      <React.Fragment>
        <Nav>
          <Filter filterMovies={filterByGenre} />
          <Sort setSortParam={applySortParam} />
        </Nav>
        {
          foundMovies.length !== 0 ? movieListMakrUp() : <EmptyComponent />
        }
      </React.Fragment>
    );
}
