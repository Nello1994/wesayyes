import React, { useState } from "react"
import PropTypes from "prop-types"

// Components
import {
  useMultiStyleConfig,
  Text,
  Box,
  VStack,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react"

// import Media
import wallpaper from "../../assets/img/wallpaper-invite.jpg"

const ContactForm = () => {
  const style = useMultiStyleConfig("ContactForm")
  // Stato per la selezione della preferenza allergie/intolleranze
  const [hasAllergies, setHasAllergies] = useState("")

  // Gestore del cambiamento nella select
  const handleAllergiesChange = (e) => {
    setHasAllergies(e.target.value)
  }

  return (
    <Box id='partecipa' {...style.outerBox}>
      <Box {...style.wallpaper} backgroundImage={wallpaper}>
        <Box {...style.formWrp}>
          <Box {...style.formBox}>
            <Text {...style.formText}>Partecipa</Text>
            <form
              style={{ width: "100%" }}
              action='https://formsubmit.co/mara.borrelli@gmail.com'
              method='POST'
            >
              <input type='hidden' name='_captcha' value='false' />
              <input
                type='hidden'
                name='_subject'
                value='Nuovo messaggio dal tuo sito'
              />
              <VStack {...style.form}>
                <VStack {...style.inputWrp}>
                  <input
                    type='text'
                    name='Nome e Cognome/Famiglia'
                    placeholder='Nome e Cognome/Famiglia'
                    required
                    style={{ padding: "8px 16px", borderRadius: "4px" }}
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                    style={{ padding: "8px 16px", borderRadius: "4px" }}
                  />
                  <input
                    type='text'
                    name='partecipanti'
                    placeholder='Numero di partecipanti'
                    required
                    style={{ padding: "8px 16px", borderRadius: "4px" }}
                  />
                  <Select
                    name='Seleziona preferenza Menu'
                    placeholder='Seleziona preferenza Menu'
                    required
                    style={{
                      background: "white",
                      color: "#718096",
                      borderColor: "white",
                    }}
                  >
                    <option value='Carne'>Carne</option>
                    <option value='Pesce'>Pesce</option>
                  </Select>
                  <Select
                    name='Hai intolleranze e/o allergie?'
                    placeholder='Hai intolleranze e/o allergie?'
                    required
                    style={{
                      background: "white",
                      color: "#718096",
                      borderColor: "white",
                    }}
                    value={hasAllergies}
                    onChange={handleAllergiesChange}
                  >
                    <option value='Sì'>Sì</option>
                    <option value='No'>No</option>
                  </Select>

                  {/* Condizione per mostrare la TextArea */}
                  {hasAllergies === "Sì" && (
                    <Textarea
                      name='Lista intolleranze e allergie'
                      placeholder='Indica qui eventuali intolleranze e/o allergie'
                      style={{
                        width: "100%",
                        background: "white",
                        height: "unset",
                        minHeight: "100px",
                      }}
                    />
                  )}
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
