import React from 'react'
import {useDispatch} from 'react-redux'

const Search = props => {

  const dispatch = useDispatch()
  console.log(dispatch)

  function handleChange(e){
    console.log(e.target.value)
    const input = e.target.value
    dispatch({
      type: "SEARCH",
      payload: input
    })
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
