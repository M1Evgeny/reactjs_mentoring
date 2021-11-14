import React from "react";
import { Link } from "react-router-dom";
import { AddMovieButton } from "../../components/add-movie-button";
import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Logo } from "../../components/logo";
import { Main } from "../../components/main";
import { Search } from "../../components/search";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo styleName="header-logo" />
          <AddMovieButton />
        </Container>
        <Search />
      </Header>
      <Main>
        <div className="notFound_background">
          <img
            src={
              "http://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-article.png"
            }
            className=""
          />
          <h1 style={{ textAlign: "center" }}>
            <Link to="/search">Go to Home </Link>
          </h1>
        </div>
      </Main>
      <Footer>
        <Logo styleName="footer-logo" />
      </Footer>
    </>
  );
};
