import {Link} from 'react-router-dom'
import React from 'react'

export default function NavBar(props) {

  const date = Date.now()
  const today = new Date(date)

  return (
    <div>
      <div className="headline"><h4>RADIO 135</h4>
      <div className="navbar-container">
        <div className="home"><Link to="/">Home</Link></div>
        <div className="date">{today.toDateString()} | {today.getHours()}:{today.getMinutes()}</div>
        <div className="song-nav"><Link to="/songs">Songs</Link></div>
        <div className="sign-in">Sign In</div>
      </div>
      </div>
    </div>
  )
}

