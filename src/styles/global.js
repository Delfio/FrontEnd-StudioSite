import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap');

  body, html{
    height: 100%;
  }

  body, input, button{
    font: 14px, Montserrat, sans-serif,
    display: flex;
  }

  button {
    cursor: pointer;
  }
`;
