import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider} from "@chakra-ui/react"
import "@fontsource/aguafina-script/400.css"
import "@fontsource/aguafina-script"
import "@fontsource/raleway/400.css"



import  theme from"./theme"

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

