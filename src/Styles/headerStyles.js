import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #ededed;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const HeaderTitle = styled.div`
    color: #777777;
    font-size: xx-large;
    font-weight: bold;
`;

export const Logo = styled.img`
    margin: 0 125px 0 25px;
    height: 50px;
    width: 50px;
`

export const ProfileLink = styled.div`
    width: 200px;
    text-align: right;
    margin-right: 20px;
`;
