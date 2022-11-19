import styled from "styled-components"

export const TitleHeader = styled.header`
    font-size: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 8vh;
    padding-top: 90px;
    padding-left: 50px;
    width: 100%;
    position: relative;
`

export const ArticleHeader = styled.article `
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    position: absolute;
    left: 10px;
`

export const ImgProfile = styled.img `
    height: 50px;
    width: 50px;
    border-radius: 50px;
`