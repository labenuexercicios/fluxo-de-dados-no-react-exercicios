import {TitleHeader} from './styled'
import {Info} from './styled.js'

export const Header = (props) => {
console.log(props.novoObjeto)
    return(
        <div>
        <TitleHeader>
            Insta4
        </TitleHeader>
        <Info>
            <img src={props.foto} alt="Foto do perfil"></img>
            <p>{props.nome}</p>
        </Info>
        </div>
    )
}