import styled from '@emotion/styled'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export const Container = styled.li`
    background-color: ${getRandomHexColor()};
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 20px 20px;
    border: 1px solid #8E8F99;
    width: 50px;
`;

export const Statlist = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
`;

export const Percentage = styled.span`
    font-weight: 500;
    margin-top: 8px;
`;

export const Title = styled.h2`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;