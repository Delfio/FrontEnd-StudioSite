import styled from 'styled-components';

export const TxtNoticiaPrincipal = styled.h2`
  font-weight: bold;
  color: #f44336;

  font-size: 3.56rem;
  line-height: 110%;
  margin: 2.3733333333rem 0 1.424rem 0;

  &:hover {
    color: #e53935;
  }
`;

export const DivNoticia = styled.div`
  border: solid #eeee;
  border-width: 0px 2px 0px 0px;
  margin-top: 25px;
  @media (max-width: 920px) {
    border: none;
    border-width: 0px 0px 0px 0px;
  }
`;

export const TxtNoticiasSecundarias = styled.h4`
  font-size: 1.125rem;
  line-height: 1.2;
  letter-spacing: -0.035em;
  font-weight: 700;
  color: red;
  padding: 0;
  margin: 5px;

  &:hover {
    color: #e53935;
  }
`;

export const Huipremiumphoto = styled.img`
  width: 100%;
  // max-height: 9rem;
  margin-top: 25px;
  padding: 0;
  border-radius: 5px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TituloNoticia = styled.h5`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.25;
`;

export const List = styled.ul`
  display: block;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  li {
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    & + li {
      margin-top: 15px;
      border-top: solid 2px #eee;
    }

    a {
      margin: 5px;
      text-decoration: none;
      font-size: 1.125rem;
      line-height: 1.2;
      letter-spacing: -0.035em;
      font-weight: 700;
    }
  }
`;
