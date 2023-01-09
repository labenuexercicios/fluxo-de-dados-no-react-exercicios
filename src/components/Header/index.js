import {TitleHeader} from './styled'
import React, {useState} from "react";
import {Image, Paragrafo, Bloco} from "./styled.js"

export const Header = (props) => {

    return(
            <TitleHeader>
                <Bloco>
                    <Image src={props.dados.foto}/>
                    <Paragrafo>{props.dados.nome}</Paragrafo> 
                </Bloco>
                Insta4
            </TitleHeader>
    )
}