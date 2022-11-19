import {TitleHeader, ArticleHeader, ImgProfile} from './styled'

export const Header = (props) => {

    return(
        <TitleHeader>
            <ArticleHeader>
                <ImgProfile src={props.imgProfile}/>
                <h6>{props.user.name}</h6>
            </ArticleHeader>
            <h4>Insta4</h4>
        </TitleHeader>
    )
}