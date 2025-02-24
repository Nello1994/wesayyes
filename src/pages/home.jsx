import PropTypes from 'prop-types'
import SaveTheDate from '../components/save-the-date/index'
import Divider from '../components/divider'
import ContactForm from '../components/contact-form/ContactForm'

const Home = (props) => {
  return (
    <>
      <SaveTheDate></SaveTheDate>
      <Divider />
      <ContactForm></ContactForm>
    </>
  )
}

Home.propTypes = {}

//Home.displayName = 'Home'

export default Home
