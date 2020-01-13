import styled from 'styled-components';

export const List = styled.ul`
  align-items: center;

  li {
    margin: 0;
    padding-right: 12px;
    padding-left: 12px;
    display: list-item;

    box-sizing:border-box;

    margin-top: 25px;

    border-radius: 25px;

    transition: 0s box-shadow;

    &:hover {
      transition-delay: 0s;
      transform: scale(1.02);

      box-shadow: 0px 0px 15px rgba(80,80,80, 0.6);
    }

    @media (max-width: 980px) {
      border-top: solid 1px #eee;
      background: none;
      margin-top: 15px;
    }


  }
`;

export const TituloEvento = styled.h4`
  color: #2a2a2a;
  margin-top: 25px;
  margin-bottom: 0;
  text-decoration: none;
  font-size: 1.4rem;

  font-weight: 500;
`;

export const DivImg = styled.section`

  border-radius: 25px;
  display: block;
  margin: 0;
  width: 100%;
  height: 25vh;
  background: url(${props => props.bg}) no-repeat center center;
  border-right: solid #000 2px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: solid #eee 2px;

  border: 1px solid #d6d8db;
  @media (max-width: 980px) {
    height: 85px;
    border-radius: 5px;
    margin-top: 25px;
  }
`;

export const TituloEmpresa = styled.p`
  font-size: 1.3em;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  margin-top: -5px;
`;
