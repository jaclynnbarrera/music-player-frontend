import {Link} from 'react-router-dom'

export default function NavBar(props) {
  return (
      <div>
          <Link to="/songs">Songs</Link><br></br>
          <Link to="/about">About</Link>
      </div>
  )
}


{/* <select>
  <option>Song</option>
  <option>About</option>
</select> */}