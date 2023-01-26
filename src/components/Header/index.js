import { TitleHeader, ProfilePicture } from './styled'

export const Header = (props) => {

    return (
        <TitleHeader>
        <div>
            <ProfilePicture src={props.dadosLogin.foto} />
            <p>{props.dadosLogin.nome}</p>
            </div>
            Insta4
        </TitleHeader>
    )
}