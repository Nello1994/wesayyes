import PropTypes from 'prop-types'
import SaveTheDate from '../components/save-the-date/index'
import Divider from '../components/divider'

const Home = (props) => {
  const { isHome } = props
  return (
    <>
      <SaveTheDate></SaveTheDate>
      <Divider />
    </>
  )
}

Home.propTypes = {
  isHome: PropTypes.string,
}

Home.displayName = 'Home'

export default Home
