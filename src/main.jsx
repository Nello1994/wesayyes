import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/index.jsx'
import theme from './pages/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Header></Header>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
