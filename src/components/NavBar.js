import {Link} from 'react-router-dom'
import React from 'react'
import Submit from '../components/Submit'

export default function NavBar(props) {

  const date = Date.now()
  const today = new Date(date)

  return (
    <div>
      <div className="navbar-container">
        <div className="home"><Link to="/">Home</Link></div>
        <div className="date">{today.toDateString()} | {today.getHours()}:{today.getMinutes()}</div>
        <div className="song-nav"><Link to="/songs">Catalog</Link></div>
        <div className="submit"><Link to="/submit">Submit A Song</Link></div>
      </div>
    </div>
  )
}