import { TitleHeader, Foto, ContainerHeader } from './styled'

export const Header = (props) => {
    const { newLogin } = props
    return (
        <ContainerHeader>
            <TitleHeader>{newLogin.nome}</TitleHeader>
            <Foto src={newLogin.imagem} />
            <TitleHeader>Insta4</TitleHeader>
        </ContainerHeader>
    )
}