import React from 'react';
import './Sort.css';

const Sort = ({setSortParam}) => {
    return (
        <div className="sort">
            <label className="sortBy">
                <span className="select-label">Sort by</span>
                <select onClick={(e) => setSortParam(e.target.value)} >
                    <option defaultValue value="release-date">Release Date</option>
                    <option value="vote_average">Rating</option>
                </select>
            </label>
      </div>
    )
}

export default Sort;