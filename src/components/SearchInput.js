import React from 'react'
import { connect } from 'react-redux'
import searchSong from '../actions/searchSong'
import { withRouter } from 'react-router-dom'
import SearchResults from './SearchResults'

class SearchInput extends React.Component {
  constructor(){
    super()
    this.state = {
      search: "",
      isSubmitted: false
    }
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.searchSong(this.state.search)
    this.setState({search: "", isSubmitted: true})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.search} name="search"></input>
        </form>
        {this.state.isSubmitted && <SearchResults results={this.props.search}/>}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {search: state.search}
}

export default withRouter(connect(mapStateToProps, {searchSong})(SearchInput))