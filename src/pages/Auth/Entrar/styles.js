import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 1px 0px 25px rgba(0, 0, 0, 0.4);

  align-items: center;

  display: flex;

  @media (max-width: 980px) {
    display: flex;
    align-items: center;
    box-shadow: 1px 0px 25px rgba(0, 0, 0, 0.1);
  }

  margin-top: 15px;

  div {
    margin-bottom: 15px;

    form {
      padding: 8% 0 8%;
      span {
        color: red;
        align-self: flex-start;
        margin: 0 0 10px;
      }
    }
  }
`;
