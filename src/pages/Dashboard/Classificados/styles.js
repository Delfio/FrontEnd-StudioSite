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
    -moz-appearance:textfield;
  }
  form {
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5);
  }

`;
