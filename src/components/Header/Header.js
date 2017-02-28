import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header">
    <h4> <Link to="/">Home</Link> </h4>
  </div>
)

export default Header
