import styled from '@emotion/styled'

export const FriendListContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const FriendListItemContainer = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    border: 1px solid #8E8F99;
    width: 200px;
`;

export const Status = styled.span`
    border-radius: 50%;
    background-color: #000;
    width: 15px;
    height: 15px;
    margin: auto 10px;


    background-color: ${props => {
        switch (props.isOnline) {
            case true:
                return 'green';
            case false:
                return 'red';
            default:
                return '#000'; 
        }
    }}
`;

export const FriendName = styled.p`
    width: 60px;
`;