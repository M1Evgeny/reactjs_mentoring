import React from 'react';

const Search = () => {
    return (
    <div className="margin-1">
      <div className="row">
            <h1 className="findmovie">FIND YOUR MOVIE</h1>
            <form>
                <input className="searchField" type="text" placeholder="What do you want to watch?"/>
                <button type="button" className="btn btn-danger searchButton">
                    Search 
                </button>
            </form>
      </div>
    </div>
    )
}

export default Search;