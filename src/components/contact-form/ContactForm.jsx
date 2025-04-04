import React from "react"
import PropTypes from "prop-types"

// Components
import {
  useMultiStyleConfig,
  Text,
  Box,
  Flex,
  VStack,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react"

// import Media
import wallpaper from "../../assets/img/wallpaper-invite.jpg"

const ContactForm = () => {
  const style = useMultiStyleConfig("ContactForm")
  return (
    <Box id='partecipa' {...style.outerBox}>
      <Box {...style.wallpaper} backgroundImage={wallpaper}>
        <Box {...style.formWrp}>
          <Box {...style.formBox}>
            <Text {...style.formText}>Partecipa</Text>
            <form
              style={{ width: "100%" }}
              action='https://formsubmit.co/borrelli.nello94@gmail.com'
              method='POST'
            >
              <input type='hidden' name='_captcha' value='false' />
              {/* <input type="hidden" name="_next" value="https://tuo-sito.com/grazie" /> */}
              <input
                type='hidden'
                name='_subject'
                value='Nuovo messaggio dal tuo sito'
              />
              <VStack {...style.form}>
                <VStack {...style.inputWrp}>
                  <input
                    type='text'
                    name='name'
                    placeholder='Nome'
                    required
                    style={{ padding: "16px", border: "1px solid" }}
                  />
                  ,
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                    style={{ padding: "16px", border: "1px solid" }}
                  />
                  <input
                    type='text'
                    name='partecipanti'
                    placeholder='Numero di partecipanti'
                    required
                    style={{ padding: "16px", border: "1px solid" }}
                  />
                  <Select
                    name='reason'
                    placeholder='Seleziona preferenza Menu'
                    required
                    style={{ background: "white" }}
                  >
                    <option value='Carne'>Carne</option>
                    <option value='Pesce'>Pesce</option>
                  </Select>
                  <Select
                    name='reason'
                    placeholder='Hai intolleranze e/o allergie?'
                    required
                    style={{ background: "white" }}
                  >
                    <option value='Sì'>Sì</option>
                    <option value='No'>No</option>
                  </Select>
                  <Textarea
                    name='message'
                    placeholder='Indica qui eventuali intolleranze e/o allergie'
                    required
                    style={{
                      width: "100%",
                      background: "white",
                      height: "unset",
                      minHeight: "100px",
                    }}
                  />
                </VStack>

                <Button type='submit' {...style.formButton}>
                  Invia
                </Button>
              </VStack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

ContactForm.propTypes = {}
export default ContactForm
