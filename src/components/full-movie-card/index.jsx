import React, { useState, useEffect } from "react";
import styles from "./FullMovieCard.module.css";
import { Logo } from "../logo";
import { useId } from "../context/id-context";
import stubs from "../movie-list-container/mockedMovies.json";

export function FullMovieCard() {
  const { movieId, setMovieId } = useId();
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [genres, setGenres] = useState([]);
  const [voteAverage, setVoteAverage] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");

  const closeMovieCard = () => setMovieId(0);

  useEffect(() => {
    const movie = stubs.filter((movie) => movie.id === movieId)[0];
    setTitle(movie.title);
    setGenres(movie.genres);
    setVoteAverage(movie.vote_average);
    setOverview(movie.overview);
    setReleaseYear(new Date(movie.release_date).getFullYear());
    setPosterPath(movie.poster_path);
    setHours(Math.floor(movie.runtime / 60));
    setMins(Math.floor(movie.runtime % 60));
  }, [movieId]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo styleName="header-logo" />
        <button
          type="button"
          className={styles.searchButton}
          onClick={closeMovieCard}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
      <article className={styles.article}>
        <img src={posterPath} className={styles.card_img_top} alt="..." />
        <section className={styles.section}>
          <p>
            <span className={styles.movie_title}>{title}</span>
            <span className={styles.movie_rating}>{voteAverage}</span>
          </p>
          {genres.length > 0 && (
            <p className={styles.genre_list}>{genres.join(", ")}</p>
          )}
          <p>
            <span className={styles.release_date}>{releaseYear}</span>
            <span className={styles.release_date}>
              {hours}h {mins}min
            </span>
          </p>
          <p className={styles.movie_overview}>{overview}</p>
        </section>
      </article>
    </header>
  );
}
