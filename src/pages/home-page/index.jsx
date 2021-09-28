import React from 'react';
import { Header } from '../../components/header';
import { Container } from '../../components/container';
import { Logo } from '../../components/logo';
import { Search } from '../../components/search';
import { AddMovieButton } from '../../components/add-movie-button';
import { Main } from '../../components/main';
import { MovieListContainer } from '../../components/movie-list-container';
import { Footer } from '../../components/footer';

export const HomePage = () => {
    return (
        <React.Fragment>
            <Header>
                <Container>
                    <Logo styleName='header-logo'/>
                    <AddMovieButton />
                </Container>
                <Search />
            </Header>
            <Main>
                <MovieListContainer/>
            </Main>
            <Footer>
                <Logo styleName='footer-logo'/>
            </Footer>
        </React.Fragment>
    )
}
