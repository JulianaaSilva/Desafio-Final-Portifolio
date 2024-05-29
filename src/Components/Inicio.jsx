import React from "react"
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/insta.png"
import Linkedin from "../assets/Linkedin.png"
import Perfil from "../assets/Perfil.jpg"
import * as S from "./Style.jsx"

function Inicio() {
    return (

        <S.SectionInicio>
            <img src={Perfil} alt="Foto do perfil" />
              
                    <h2> Olá! Sou Juliana,</h2>
                    <h2> meu portfólio.</h2>
               
                <S.RedesSociais>
                    <img src={Instagram} alt="logo do instagram" />
                    <img src={Facebook} alt="logo do facebook" />
                    <img src={Linkedin} alt="logo do linkedin" />
                </S.RedesSociais>
            

        </S.SectionInicio>
    )
}

export default Inicio