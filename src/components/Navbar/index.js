import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      const backgroundColor = isDarkTheme ? 'light-theme' : 'dark-theme'
      const navItemColor = isDarkTheme ? 'light' : 'dark'
      return (
        <nav className={`navbar-container ${backgroundColor}`}>
          <img className="website-logo" src={websiteLogo} alt="website logo" />
          <ul className="nav-item-list">
            <Link to="/">
              <li className={`nav-item ${navItemColor}`}>Home</li>
            </Link>
            <Link to="/about">
              <li className={`nav-item ${navItemColor}`}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="button"
            data-testid="theme"
            onClick={toggleTheme}
          >
            <img className="theme-logo" src={themeLogo} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
