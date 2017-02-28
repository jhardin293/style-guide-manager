import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Project = ({ name }) => (
  <li>
    <Link to={`/project/${name}`}>
      {name}
    </Link>
  </li>
)

export default Project
