import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? 'light-theme' : 'dark-theme'
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      const headingColor = isDarkTheme ? 'light' : 'dark'
      return (
        <>
          <Navbar />
          <div className={`bg-container ${backgroundColor}`}>
            <img className="image" src={homeImage} alt="about" />
            <h1 className={`heading ${headingColor}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
