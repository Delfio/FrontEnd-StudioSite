import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 55px;
  display: block;

  h4{
    color: rgba(0,0,0,0.8);
    font-weight: 400;
    letter-spacing: -1px;
    margin-bottom: 8;
  }
`;

export const List = styled.ul`

  @media (max-width: 980px) {
    margin-top: 1%;
  }
  li {
    transition: transform 0.2s;
    >div{
      margin:0
    }
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;

      margin-top: 10px;
    }

    :hover{
      transform: scale(1.02);

      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Li = styled.li`
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';


`

export const Section = styled.section`
  display: block;
  width: 150px;
  height: 150px;
  background: url(${props => props.bg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

`;

