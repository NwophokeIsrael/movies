// src/Filter.js
import React from 'react';

const Filter = ({ handleFilterChange, titleFilter, ratingFilter }) => {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Filter by title"
                value={titleFilter}
                onChange={(e) => handleFilterChange(e.target.value, 'title')}
            />
            <input
                type="number"
                placeholder="Filter by rating"
                value={ratingFilter}
                onChange={(e) => handleFilterChange(e.target.value, 'rating')}
            />
        </div>
    );
};

export default Filter;