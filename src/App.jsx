import { createGlobalStyle } from 'styled-components'
import React from "react"
import Navegacao from "./Components/Navegacao.jsx"


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: black;
    
}
`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Navegacao/>
    </>
  )
}


export default App;