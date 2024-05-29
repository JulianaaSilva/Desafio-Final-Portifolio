import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import Galeria from "./Galeria.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"



function Navegacao(){
    return(  
        <BrowserRouter>
        <S.Navegacao>
            <S.Lista>
                <Link to="/"> 
                <li>Inicio</li>
                </Link>

                <Link to="/Sobre">
                <li>Sobre</li>
                </Link>

                <Link to="/projetos">
                <li>Projetos</li>
                </Link>

                <Link to="/galeria">
                <li>Galeria</li>
                </Link>
            
                
                
            </S.Lista>
        </S.Navegacao>
        <Routes>

            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/galeria" element={<Galeria />} />

        </Routes>


        </BrowserRouter>
        

    
    )
}


export default Navegacao