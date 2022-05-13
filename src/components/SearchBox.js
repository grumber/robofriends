import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                // id="searchbar"
                // onkeyup="search_robots"
                onChange={searchChange}
                type="search"
                placeholder="Search robots.."
            />
        </div>
    );
};

export default SearchBox;