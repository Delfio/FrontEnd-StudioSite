import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 980px) {
    display: block;
  }

  flex: 1;
  li {
    /* width: 35%; */
    display: flex;
    box-shadow: 1px 1px 8px rgba(0,0,0,0.4);
    margin-right: 25px;
    align-items: center;

    @media (max-width: 980px) {
      margin-right: 0px;
      margin-bottom: 15px;
  }

    transition: 0s box-shadow;
    &:hover {
      transition-delay: 0s;
      transform: scale(1.02);

      box-shadow: 0px 0px 15px rgba(80,80,80, 0.6);
    }
  }
`;

export const Div = styled.div`

  div {
    h1 {
      font-weight: 200;
    }
  }
`
export const Ul2 = styled.ul`
  li {

    justify-content: safe;
    margin: 9px;
    display: flex;
    align-items: center;

    h5 {
      padding-left: 30px;
    }
    h6 {
      padding-left: 30px;

    }
  }
`;
