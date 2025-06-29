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

  const [totalPeople, setTotalPeople] = useState(1)
  const [menuCarne, setMenuCarne] = useState(0)
  const [menuPesce, setMenuPesce] = useState(0)

  const handleTotalChange = (e) => {
    const value = parseInt(e.target.value) || 0
    setTotalPeople(value)

    const sum = menuCarne + menuPesce
    if (sum > value) {
      const excess = sum - value
      if (menuPesce >= excess) setMenuPesce(menuPesce - excess)
      else {
        setMenuPesce(0)
        setMenuCarne(value)
      }
    }
  }

  const handleCarneSelect = (e) => {
    const value = parseInt(e.target.value)
    const maxPesce = totalPeople - value
    setMenuCarne(value)
    if (menuPesce > maxPesce) {
      setMenuPesce(maxPesce)
    }
  }

  const handlePesceSelect = (e) => {
    const value = parseInt(e.target.value)
    const maxCarne = totalPeople - value
    setMenuPesce(value)
    if (menuCarne > maxCarne) {
      setMenuCarne(maxCarne)
    }
  }

  const generateOptions = (max) =>
    Array.from({ length: max + 1 }, (_, i) => (
      <option key={i} value={i}>
        {i}
      </option>
    ))

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
                    type='number'
                    name='partecipanti'
                    placeholder='Numero di partecipanti'
                    onChange={handleTotalChange}
                    required
                    style={{ padding: "8px 16px", borderRadius: "4px" }}
                  />
                  <Text {...style.labelText}>Quantità Menù di Carne</Text>
                  <Select
                    name='Quantità Menù di carne'
                    placeholder='Seleziona quantità'
                    onChange={handleCarneSelect}
                    required
                    style={{
                      background: "white",
                      color: "#718096",
                      borderColor: "white",
                    }}
                  >
                    {generateOptions(totalPeople - menuPesce)}
                  </Select>
                  <Text {...style.labelText}>Quantità Menù di Pesce</Text>
                  <Select
                    name='Quantità Menù di pesce'
                    placeholder='Seleziona quantità'
                    onChange={handlePesceSelect}
                    required
                    style={{
                      background: "white",
                      color: "#718096",
                      borderColor: "white",
                    }}
                  >
                    {generateOptions(totalPeople - menuCarne)}
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
