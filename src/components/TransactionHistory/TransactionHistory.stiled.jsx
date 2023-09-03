import styled from '@emotion/styled'

export const Table = styled.table`
   border-collapse: collapse;
   width: 500px;
   margin: 0 auto;
`;

export const TableThead = styled.thead`
    background-color: aqua;
`;

export const TableTh = styled.th`
    padding: 10px;
    border: 1px solid #2a2a2a;
`;

export const TableTd = styled.td`
    padding: 10px;
    border: 1px solid #2a2a2a;
    text-align: center;
`;

export const TableTbody = styled.tbody`
    &:nth-child(odd) {
        background-color: grey;
    }
`;