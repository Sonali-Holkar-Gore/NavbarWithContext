import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? 'light-theme' : 'dark-theme'
      const textColor = isDarkTheme ? 'light' : 'dark'
      return (
        <>
          <Navbar />
          <div className={`bg-container ${backgroundColor}`}>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`heading ${textColor}`}>Lost Your Way?</h1>
            <p className={`description ${textColor}`}>
              We cannot seem to find the page your looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
