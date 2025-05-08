import React from 'react'
import{ Link} from 'react-router-dom'
function header() {
  return (
    <header className="header">
    <div className="logo">MyWebsite</div>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/game">game</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
  )
}

export default header