import React from 'react';
import Header from '../../components/Header';
import Logo from '../../components/logo';
import Search from '../../components/search';
import AddMovieButton from '../../components/add-movie-button';
import Main from '../../components/main';
import Filter from '../../components/filter';
import Footer from '../../components/footer';

const HomePage = () => {
    return (
        <React.Fragment>
            <Header>
                <Logo styleName='header-logo'/>
                <Search />
                <AddMovieButton />
            </Header>
            <Main>
                <Filter />
            </Main>
            <Footer>
                <Logo styleName='footer-logo'/>
            </Footer>
        </React.Fragment>
    )
}

export default HomePage;