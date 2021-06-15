import React from 'react'

const SearchResults = (props) => {
    return (
        <div>
            <h2>Search Results for "{props.location.searchTerm}"</h2>
            {props.location.results.map(result => result.title)}
        </div>
    )
}

export default SearchResults
