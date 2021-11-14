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
import { useLocation, useParams } from "react-router-dom";

const MovieListContainerTemplate = ({ films, fetchMovies, loading }) => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const genre = query.get("genre");
  const sortBy = query.get("sortBy");

  const searchQuery = useParams().searchQuery;

  useEffect(() => {
    fetchMovies(genre, sortBy, searchQuery);
  }, [genre, sortBy]);

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
        <Filter />
        <Sort />
      </Nav>
      {films.length !== 0 ? movieListMakrUp() : <EmptyComponent />}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  fetchMovies: fetchMoviesActionCreator,
};

export const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainerTemplate);
