import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

const style = {
  global:(props) => ({
    body:{
      bg:mode("gray.800", "#000")(props),
      color:mode("gray.800", "whiteAlpha.900")(props)
    }
  })
}

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config, style })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
