import React from "react";
import { fetchMoviesActionCreator } from "../../store/actionCreators/fetchMovies";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./Search.css";

const SearchTemplate = ({ fetchMovies }) => {
  const history = useHistory();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const genre = query.get("genre");
  const sortBy = query.get("sortBy");

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values, { resetForm }) => {
      history.push(`/search/${values.title}`);
      fetchMovies(genre, sortBy, values.title);
      resetForm({ values: { title: "" } });
    },
  });

  return (
    <div className="find-movie-container">
      <h1 className="findmovie">FIND YOUR MOVIE</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="title"
          name="title"
          className="searchField"
          type="text"
          placeholder="What do you want to watch?"
          //defaultValue={formik.values.title}
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  fetchMovies: fetchMoviesActionCreator,
};

export const Search = connect(null, mapDispatchToProps)(SearchTemplate);
