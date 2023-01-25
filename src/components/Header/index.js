import { Description } from '../FormularioPostagem/styled'
import {TitleHeader} from './styled'

export const Header = (props) => {

    return(
        <TitleHeader>
            <h3>{props.nome}</h3>
            <img src={props.imagemdeperfil} height="50" width={50}></img>
            {/* <Description>{props.nome}</Description> */}
        </TitleHeader>
    )
}