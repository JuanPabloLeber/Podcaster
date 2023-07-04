import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="nav-title">Podcaster</h1>
      </Link>
    </div>
  )
}

export default NavBar
