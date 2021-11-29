import React, { useEffect } from "react";
import styles from "./FullMovieCard.module.css";
import { Logo } from "../logo";
import { fetchMovieByIdActionCreator } from "../../store/actionCreators/fetchMovieById";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function FullMovieCardTemplate({ movie, fetchMovie, ...props }) {
  useEffect(() => {
    fetchMovie(props.movieId);
  }, [props.movieId]);

  return (
    movie.title && (
      <header className={styles.header}>
        <div className={styles.container}>
          <Logo styleName="header-logo" />
          <Link to="/search" type="button" className={styles.searchButton}>
            <svg viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </Link>
        </div>
        <article className={styles.article}>
          <img
            src={movie.poster_path}
            className={styles.card_img_top}
            alt={movie.title}
          />
          <section className={styles.section}>
            <p>
              <span className={`${styles.movie_title} fullmovie-card-title`}>{movie.title}</span>
              <span className={`${styles.movie_rating} fullmovie-card-movie_rating`}>{movie.vote_average}</span>
            </p>
            {movie.genres !== undefined && movie.genres.length > 0 && (
              <p className={`${styles.genre_list} fullmovie-card-genre_list`}>{movie.genres.join(", ")}</p>
            )}
            <p>
              <span className={`${styles.release_date} fullmovie-card-release_date`}>
                {new Date(movie.release_date).getFullYear()}
              </span>
              <span className={styles.release_date}>
                {Math.floor(movie.runtime / 60)}h{" "}
                {Math.floor(movie.runtime % 60)}
                min
              </span>
            </p>
            <p className={`${styles.movie_overview} fullmovie-card-movie_overview`}>{movie.overview}</p>
          </section>
        </article>
      </header>
    )
  );
}

const mapStateToProps = ({ movie }) => ({ movie });

const mapDispatchToProps = {
  fetchMovie: fetchMovieByIdActionCreator,
};

export const FullMovieCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullMovieCardTemplate);
