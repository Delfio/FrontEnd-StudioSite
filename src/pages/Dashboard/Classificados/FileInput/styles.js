import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-weight: 200;
  }
`;

export const Ul = styled.ul`
  display: table;
  flex: 1;
  flex-direction: row;
  li {
    display: flex;
    flex-direction: column;
    margin: -25px;
    align-items: center;
    p {
      background-color: rgba(0,0,0,0.02);
      font-size: 0.70em;
      text-align: start;
    }
    h4 {
      margin-bottom: -22px;
      font-weight: 700;
      color: rgba(150, 0, 15, 0.7)
    }
  }
`
