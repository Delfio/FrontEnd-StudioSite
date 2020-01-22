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

`;
