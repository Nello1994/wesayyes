import PropTypes from 'prop-types'
import AboutMe from '../components/about-me'

const Home = (props) => {
  const { isHome } = props
  return (
    isHome && (
      <>
        <AboutMe />
      </>
    )
  )
}

Home.propTypes = {
  isHome: PropTypes.string,
}

Home.displayName = 'Home'

export default Home
