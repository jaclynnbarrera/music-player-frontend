import {Link} from 'react-router-dom'

export default function NavBar(props) {

  const date = Date.now()
  const today = new Date(date)

  return (
      <div className="container">
        <div className="home">Home</div>
        <div className="date">{today.toDateString()}</div>
        <div className="songs-nav">Songs</div>
      </div>
  )
}