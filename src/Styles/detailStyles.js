import styled from 'styled-components'

export const DetailContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 50px 1fr;  
`;

export const Title = styled.h3`
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    text-align: center;
    margin-top: 10px;
`;

export const EarthQuakeDetails = styled.div`
    display: grid;
    grid-template-columns: 200px 200px;
    grid-column-start: 2;
    grid-column-end: 4; 
    grid-row-start: 2;
    justify-self: center;
    > div {
      width: 300px;  
    }
    > div, h3 {
        margin: 5px 0;
    }
`