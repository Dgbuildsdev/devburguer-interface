import styled from 'styled-components';

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 20px;

`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    padding: 18px;
    text-align: left;
    background-color: #484848;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    line-height: 115%;    
    border-bottom: 1px solid #cdcdcd;

    &:first-child { 
        border-top-left-radius: 20px;
    }

    &:last-child {
        border-top-right-radius: 20px;
    }
    
`;

export const Td = styled.td`
    padding: 18px;
    color: #484848;
    font-weight: 500;
    line-height: 115%;
    padding-bottom: 20%;
    text-align: left;

`;
export const Body = styled.tbody`
 
    


`;


