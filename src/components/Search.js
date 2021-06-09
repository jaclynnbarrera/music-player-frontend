import React from 'react'
import {useDispatch} from 'react-redux'

const Search = props => {

  const dispatch = useDispatch()

  function handleSubmit(e){
    if (e.key === "Enter"){
      let input = e.target.value
    dispatch({
      type: "SEARCH",
      payload: input
      })
    }
  }

  return (
    <div className="song-search">
        <label>Search:</label>
        <input onKeyPress={handleSubmit}/>
      </div>
  )
}

export default Search
