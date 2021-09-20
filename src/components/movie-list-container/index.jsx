import React from 'react';
import './MovieListContainer.css';
import stubs from './mockedMovies.json';
import MovieList from '../movie-list';
import Nav from '../nav';
import SubTitle from '../sub-title';
import Sort from '../sort';
import Filter from '../filter';
import EmptyComponent from '../empty-component';

class MovieListContainer extends React.Component {
  constructor() {
    super();
    this.state = { genre: 'all', sortParam: 'release_date', mockedMovies: stubs };
    this.filterMovies = this.filterMovies.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.setSortParam = this.setSortParam.bind(this);
    this.sortMovies = this.sortMovies.bind(this);
  }

  filterMovies() {
    if (this.state.genre === 'all') return this.state.mockedMovies;
    return this.state.mockedMovies.filter((movie) => movie.genres.includes(this.state.genre));
  }

  filterByGenre(genre) {
    this.setState({ genre });
  }

  setSortParam(sortParam) {
    this.setState({ sortParam });
  }

  sortMovies(movies) {
    if (this.state.sortParam === 'release_date') {
      return movies.sort((a, b) => new Date(b[this.state.sortParam]) - new Date(a[this.state.sortParam]));
    }
    return movies.sort((a, b) => b[this.state.sortParam] - a[this.state.sortParam]);
  }

  render() {
    const foundMovies = this.sortMovies(this.filterMovies());
    const movieListMakrUp =() => <><SubTitle movieListLength = {foundMovies.length} /><MovieList movies={foundMovies} /></>;
    return (
      <React.Fragment>
        <Nav>
          <Filter filterMovies={this.filterByGenre} />
          <Sort setSortParam={this.setSortParam} />
        </Nav>
        {
            foundMovies.length !== 0 ? movieListMakrUp() : <EmptyComponent />
        }
      </React.Fragment>
    );
  }
}

export default MovieListContainer;
