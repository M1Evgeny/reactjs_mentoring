import React, { useEffect } from "react";
import { useModal } from "../context/modal-context";
import "./ModalWindow.css";
import { fetchMovieByIdActionCreator } from "../../store/actionCreators/fetchMovieById";
import { fetchMoviesActionCreator } from "../../store/actionCreators/fetchMovies";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { constants } from "../../store/actionCreators/constants";
import { useId } from "../context/id-context";

const ModalWindowTemplate = ({ movie, fetchMovie, fetchMovies, ...props }) => {
  const { setModalObject } = useModal();
  const { movieId, setMovieId } = useId();
  const isAddModal = props.modalTitle === "ADD MOVIE";

  const sendMovie = (data) =>
    fetch(`${constants.BASE_URL}/movies`, {
      method: isAddModal ? "POST" : "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: data,
    })
      .then(function (response) {
        setMovieId(0);
        fetchMovies();
        setModalObject({ modalType: "" });
        if (response.status === 201 && isAddModal) {
          setModalObject({ modalType: "success-modal" });
          return;
        }
        response.json().then((data) => console.log(data));
      })
      .catch((err) => console.log("Fetch Error :-S", err));

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.release_date) {
      errors.release_date = "Required";
    }
    if (!values.poster_path) {
      errors.poster_path = "Required";
    }
    if (!values.vote_average) {
      errors.vote_average = "Required";
    }
    if (!values.runtime) {
      errors.runtime = "Required";
    }
    if (!values.overview) {
      errors.overview = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: isAddModal ? "" : movie.title,
      release_date: isAddModal ? "" : movie.release_date,
      poster_path: isAddModal ? "" : movie.poster_path,
      vote_average: isAddModal ? "" : movie.vote_average,
      runtime: isAddModal ? "" : movie.runtime,
      overview: isAddModal ? "" : movie.overview,
      genres: isAddModal ? ["Comedy", "Drama", "Romance"] : movie.genres,
    },
    validate,
    onSubmit: (values) => {
      if (!isAddModal) values.id = movie.id;
      console.log(JSON.stringify(values, null, 2));
      sendMovie(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    if (movieId !== 0) {
      fetchMovie(movieId);
      console.log(movie);
    }
  }, [movieId]);

  return (
    <>
      <div
        className="modal-background"
        onClick={(e) => props.handleModalClose(e)}
        style={{ height: document.body.scrollHeight }}
      >
        <div className="modal-card">
          <div className="modal__close">
            <button type="button" className="close" title="Close">
              X
            </button>
          </div>
          <h1 className="modal-title">{props.modalTitle}</h1>
          <form className="modal-form" onSubmit={formik.handleSubmit}>
            <fieldset className="modal-fieldset">
              <label className="modal-label">
                Title
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  defaultValue={formik.values.title}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div>{formik.errors.title}</div>
                ) : null}
              </label>
              <label className="modal-label-second">
                RELEASE DATE
                <input
                  id="release_date"
                  name="release_date"
                  type="date"
                  placeholder="yyyy-mm-dd"
                  defaultValue={formik.values.release_date}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.release_date && formik.errors.release_date ? (
                  <div>{formik.errors.release_date}</div>
                ) : null}
              </label>
            </fieldset>
            <fieldset className="modal-fieldset">
              <label className="modal-label">
                movie url
                <input
                  id="poster_path"
                  name="poster_path"
                  type="url"
                  placeholder="https://"
                  defaultValue={formik.values.poster_path}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.poster_path && formik.errors.poster_path ? (
                  <div>{formik.errors.poster_path}</div>
                ) : null}
              </label>
              <label className="modal-label-second">
                RATING
                <input
                  id="vote_average"
                  name="vote_average"
                  type="number"
                  placeholder="7.8"
                  defaultValue={formik.values.vote_average}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.vote_average && formik.errors.vote_average ? (
                  <div>{formik.errors.vote_average}</div>
                ) : null}
              </label>
            </fieldset>
            <fieldset className="modal-fieldset">
              <label className="modal-label">
                genre
                <select multiple>
                  <option value="crime" defaultValue>
                    crime
                  </option>
                  <option value="horror" defaultValue>
                    horror
                  </option>
                </select>
              </label>
              <label className="modal-label-second">
                RUNTIME
                <input
                  id="runtime"
                  name="runtime"
                  type="number"
                  placeholder="minutes"
                  defaultValue={formik.values.runtime}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.runtime && formik.errors.runtime ? (
                  <div>{formik.errors.runtime}</div>
                ) : null}
              </label>
            </fieldset>
            <fieldset className="modal-fieldset">
              <label className="modal-label">
                OVERVIEW
                <textarea
                  className="overview-input"
                  id="overview"
                  name="overview"
                  type="text"
                  placeholder="Movie description"
                  {...formik.getFieldProps('overview')}
                
                />
                {formik.touched.overview && formik.errors.overview ? (
                  <div>{formik.errors.overview}</div>
                ) : null}
              </label>
            </fieldset>
            <p className="modal-buttons">
              <button className="modal-reset" type="reset">
                reset
              </button>
              <button className="modal-submit" type="submit">
                submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ movie }) => ({ movie });

const mapDispatchToProps = {
  fetchMovie: fetchMovieByIdActionCreator,
  fetchMovies: fetchMoviesActionCreator,
};

export const ModalWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindowTemplate);
