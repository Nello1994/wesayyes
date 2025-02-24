import PropTypes from 'prop-types'
import SaveTheDate from '../components/save-the-date/index'
import Divider from '../components/divider'
import ContactForm from '../components/contact-form/ContactForm'
import MapComponent from '../components/map-component/MapComponent'

const Home = (props) => {
  return (
    <>
      <SaveTheDate></SaveTheDate>
      <Divider />
      <ContactForm></ContactForm>
      <MapComponent></MapComponent>
    </>
  )
}

Home.propTypes = {}

//Home.displayName = 'Home'

export default Home
