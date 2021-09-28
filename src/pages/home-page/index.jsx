import React from 'react';
import Header from '../../components/header';
import Container from '../../components/container';
import Logo from '../../components/logo';
import Search from '../../components/search';
import FullMovieCard from '../../components/full-movie-card';
import AddMovieButton from '../../components/add-movie-button';
import Main from '../../components/main';
import MovieListContainer from '../../components/movie-list-container';
import { Footer } from '../../components/footer';
import { useId } from './id-context';

const HomePage = () => {
    const[movieId] = useId();

    return (
        <React.Fragment>
                {
                    movieId !== 0 ? <FullMovieCard movie={movieId} /> :
                        <Header>
                            <Container>
                                <Logo styleName='header-logo'/>
                                <AddMovieButton />
                            </Container>
                            <Search />
                        </Header>
                }
                <Main>
                    <MovieListContainer/>
                </Main>

            <Footer>
                <Logo styleName='footer-logo'/>
            </Footer>
        </React.Fragment>
    )
}

export default HomePage;