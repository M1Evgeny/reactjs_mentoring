import React from "react";
import { useId } from "../context/id-context";
import { useModal } from "../context/modal-context";
import { useFormik } from "formik";
import { constants } from "../../store/actionCreators/constants";
import { fetchMoviesActionCreator } from "../../store/actionCreators/fetchMovies";
import { connect } from "react-redux";
import "./DeleteModal.css";

const DeleteModalTemplate = ({ fetchMovies, handleModalClose }) => {
  const { movieId, setMovieId } = useId();
  const { setModalObject } = useModal();

  const deleteMovie = (movieId) =>
    fetch(`${constants.BASE_URL}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        accept: "*/*",
      },
    })
      .then(function (response) {
        if (response.status === 204) {
          setMovieId(0);
          fetchMovies();
          setModalObject({ modalType: "" });
          return;
        }
        response.json().then((data) => console.log(data));
      })
      .catch((err) => console.log("Fetch Error :-S", err));

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      deleteMovie(movieId);
    },
  });

  return (
    <div
      className="modal-background"
      onClick={(e) => handleModalClose(e)}
      style={{ height: document.body.scrollHeight }}
    >
      <div className="delete-modal-card">
        <div className="modal__close">
          <button type="button" className="close" title="Close">
            X
          </button>
        </div>
        <h1 className="modal-title">DELETE MOVIE</h1>
        <p className="delete-modal-text">
          Are you sure you want to delete this movie?
        </p>
        <form className="modal-form" onSubmit={formik.handleSubmit}>
          <p className="modal-buttons">
            <button className="modal-submit" type="submit">
              confirm
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchMovies: fetchMoviesActionCreator,
};

export const DeleteModal = connect(
  null,
  mapDispatchToProps
)(DeleteModalTemplate);
