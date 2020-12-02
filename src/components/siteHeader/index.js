import React from 'react'
import firebase from '../firebase'
import { Dropdown, Menu } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../globals/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './siteHeader.css'

const SiteHeader = () => {
  const user = useSelector((state) => state.user)

  function renderUserHeader() {
    const overlay = (
      <Menu>
        <Menu.Item>
          <div target="_blank" onClick={() => firebase.doSignOut().then((res) => {
            localStorage.removeItem('login')
            window.location.reload()
            })}>
            Sign Out
          </div>
        </Menu.Item>
      </Menu>
    )
    if (user.uid) {
      return (
        <li className="nav-item" placement="bottomCenter">
          <Dropdown overlay={overlay}>
            <Link className="nav-link text-white" to="/login">
              User
            </Link>
          </Dropdown>
        </li>
      )
    } else {
      return (
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login">
            Login
          </Link>
        </li>
      )
    }
  }

  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon className="navbar-text text-light" icon={['fas', 'video']} size="3x" />
      <span className="navbar-text text-light">For the movie enthusiast !!</span>
      <FontAwesomeIcon className="navbar-text text-light" icon={['fas', 'film']} size="3x" />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming/1">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/stars/1">
              Stars
            </Link>
          </li>
          {renderUserHeader()}
        </ul>
      </nav>
    </nav>
  )
}

export default SiteHeader
