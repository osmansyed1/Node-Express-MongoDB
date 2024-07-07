import React from 'react'
import st from './home.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div id={st.home}>
      <Link to="/user">User</Link>
      <Link to="/">CreateUser</Link>
    </div>
  )
}

export default Home
