import React from 'react'
import { Link } from 'gatsby'
import './Logo.css'

function Logo() {
  return (
    <h2 className="logo"> <Link to={'/'}> Lefron C </Link> </h2>
  )
}

export default Logo