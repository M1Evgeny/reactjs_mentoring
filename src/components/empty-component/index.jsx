import React from 'react';
import './EmptyContainer.css';

const EmptyContainer = () =>  (
    <div className="empty-container">
        <img src="https://designmodo.com/wp-content/uploads/2013/03/LLT-Group.jpg" className="no-movies-image" alt="No momies found" />
        <div className="margin-50">No movies found</div>
    </div>
)

export default EmptyContainer;