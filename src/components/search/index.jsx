import React from 'react';
import './Search.css';

export const Search = () => {
    return (
        <div className="find-movie-container">
            <h1 className="findmovie">FIND YOUR MOVIE</h1>
                <form className="">
                    <input className="searchField" type="text" placeholder="What do you want to watch?"/>
                    <button type="button" className="searchButton">
                        Search 
                    </button>
                </form>
        </div>
    )
}
