import { TitleHeader, Image } from "./styled";
import styled from "styled-components";

export const Header = (props) => {

    return (
        <TitleHeader>
            Insta4
            <Image src={props.login.foto} />
            <p>{props.login.nome}</p>

        </TitleHeader>
    )
}

// "https://archives.bulbagarden.net/media/upload/b/b8/Spr_1b_151.png"