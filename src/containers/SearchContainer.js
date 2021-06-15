import React from 'react'
import SearchInput from '../components/SearchInput'

class SearchContainer extends React.Component {
    
    render() {
        console.log("search container")
        return (
            <div>
                <SearchInput/>
            </div>
        )
    }
}

export default SearchContainer