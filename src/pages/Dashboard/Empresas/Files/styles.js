import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-weight: 200;
  }

  span {
    color: red;
  }

  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
`;

export const List = styled.ul`
  li {
    transition: transform 0.2s;

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

    :hover {
      transform: scale(1.02);

      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.15);
    }
  }
`;

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
