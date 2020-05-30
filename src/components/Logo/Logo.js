import React from 'react'
import { Link } from 'gatsby'
import './Logo.css'

function Logo() {
  return (
    <h2 className="logo"> <Link to={'/'}> Lefron Clothier </Link> </h2>
  )
}

export default Logo