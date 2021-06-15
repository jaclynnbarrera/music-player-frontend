import React from 'react'

class SearchInput extends React.Component {
  constructor(){
    super()
    this.state = {
      search: ""
    }
  }

handleChange(e){
  this.setState({[e.target.name]: e.target.value})
}

handleSubmit(e){
  e.preventDefault()
  console.log(this.state.search)
  this.setState({search: ""})
    }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.search} name="search"></input>
        </form>
      </div>
    )
  }

}

export default SearchInput