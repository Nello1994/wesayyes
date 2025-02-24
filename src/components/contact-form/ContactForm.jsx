import React from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Text, Box, Flex, VStack, Image } from '@chakra-ui/react'

const ContactForm = () => {
    return (
        <Box id="partecipa">
        <Text>Partecipa</Text>
            <form action="https://formsubmit.co/borrelli.nello94@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                {/* <input type="hidden" name="_next" value="https://tuo-sito.com/grazie" /> */}
                <input type="hidden" name="_subject" value="Nuovo messaggio dal tuo sito" />
                <VStack>
                    <input type="text" name="name" placeholder="Nome" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Messaggio" required></textarea>
                    <button type="submit">Invia</button>
                </VStack>
            </form>
        </Box>
    )
  }

  ContactForm.propTypes = {}
  export default ContactForm