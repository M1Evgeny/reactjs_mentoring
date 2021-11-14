import React from "react";
import { FullMovieCard } from "../../components/full-movie-card";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import { Logo } from "../../components/logo";
import { Search } from "../../components/search";
import { AddMovieButton } from "../../components/add-movie-button";
import { Main } from "../../components/main";
import { RootModal } from "../../components/root-modal";
import { MovieListContainer } from "../../components/movie-list-container";
import { Footer } from "../../components/footer";
import { useLocation } from "react-router-dom";

export const HomePage = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const id = useQuery().get("movieId");
  const movieId = id ? id : 0;

  return (
    <>
      {movieId !== 0 ? (
        <FullMovieCard movieId={movieId} />
      ) : (
        <Header>
          <Container>
            <Logo styleName="header-logo" />
            <AddMovieButton />
          </Container>
          <Search />
        </Header>
      )}
      <Main>
        <MovieListContainer />
      </Main>
      <Footer>
        <Logo styleName="footer-logo" />
      </Footer>
      <RootModal />
    </>
  );
};
