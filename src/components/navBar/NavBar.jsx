import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const [navigating, setNavigating] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setNavigating(true)
    setTimeout(() => {
      setNavigating(false)
    }, 1000)
  }, [location])

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="nav-title">Podcaster</h1>
      </Link>

      <div
        className={`navigation-indicator ${
          navigating && 'navigation-indicator-on'
        }`}
      ></div>
    </div>
  )
}

export default NavBar
