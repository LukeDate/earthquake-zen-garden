import styled from 'styled-components'

export const ProfileContainer = styled.div`
    height: 100%;
    display: grid;
    grid-column-start: span 3;
    grid-template-columns: 1fr 1fr 100px 1fr 1fr;
    grid-template-rows: 50px 1fr;
`
export const ProfilePicture = styled.img`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    height: 200px;
    width: 200px;
    margin: 0px 5px 0px auto;
`

export const ProfileDetails = styled.div`
    display: grid;
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    >h3 {
        width: 100px;
        margin: 5px 0;
    }
    >div {
        margin: 5px 0;
    }
    
`

export const Title = styled.h2` 
    grid-column-start: 2;
    grid-column-end: 5;
    text-align: center;
    margin-top: 5px;
`
