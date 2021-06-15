import {Link} from 'react-router-dom'
import React from 'react'
import SearchInput from '../components/SearchInput'

export default function NavBar() {
  
  const date = Date.now()
  const today = new Date(date)

  return (
    <div>
      <div className="headline"><h4>RADIO 135</h4>
      <div className="navbar-container">
        <div className="home"><Link to="/">Home</Link></div>
        <div className="date">{today.toDateString()} | {today.getHours()}:{today.getMinutes()}</div>
        <div className="song-nav"> <Link to="/songs">Songs</Link></div>
        <SearchInput/>
      </div>
      </div>
    </div>
  )
}
