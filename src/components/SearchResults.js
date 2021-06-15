import React from 'react'

const SearchResults = (props) => {
    return (
        <div>
           {props.results.map(result => <li>{result.title}</li>)}
        </div>
    )
}

export default SearchResults
