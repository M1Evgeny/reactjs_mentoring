import React, { useEffect } from "react";
import "./MovieListContainer.css";
import { MovieList } from "../movie-list";
import { Nav } from "../nav";
import { SubTitle } from "../sub-title";
import { Sort } from "../sort";
import { Filter } from "../filter";
import { EmptyComponent } from "../empty-component";
import { fetchMoviesActionCreator } from "../../store/actionCreators/fetchMovies";
import { connect } from "react-redux";
import { setFilterActionCreator } from "../../store/actionCreators/filter-movies";
import { setSortActionCreator } from "../../store/actionCreators/sort-movies";

const MovieListContainerTwo = ({
  films,
  fetchMovies,
  loading,
  genre,
  sortParam,
  setFilter,
  setSort
}) => {
  const filterByGenre = (genre) => {
    setFilter(genre);
  };

  const applySortParam = (sortParam) => setSort(sortParam);

  useEffect(() => {
    fetchMovies();
  }, [genre, sortParam]);

  const movieListMakrUp = () => (
    <>
      <SubTitle movieListLength={films.length} />
      <MovieList movies={films} />
    </>
  );
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <React.Fragment>
      <Nav>
        <Filter filterMovies={filterByGenre} />
        <Sort setSortParam={applySortParam} sortParam={sortParam} />
      </Nav>
      {films.length !== 0 ? movieListMakrUp() : <EmptyComponent />}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    loading: state.loading,
    genre: state.genre,
    sortParam: state.sortParam,
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMoviesActionCreator()),
    setFilter: (genre) => dispatch(setFilterActionCreator(genre)),
    setSort: (sortParam) => dispatch(setSortActionCreator(sortParam)),
  };
};

export const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainerTwo);
