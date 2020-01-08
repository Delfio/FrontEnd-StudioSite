import styled from 'styled-components';

export const Titulo = styled.a`
  font-size: 20px;
  color: #cc2b2b;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: #dd5050;
  }
`;

export const ImagePrincipal = styled.img`
  border-radius: 5px;
  border-box: ;
`;

export const TtiutloEvento = styled.p`
  margin-top: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.125rem;
  line-height: 1.2;

  transition: 0s color;

  &:hover {
    transition-delay: 0s;
    color: #1b2d96;
  }
`;

export const PopularPosts = styled.p`
  font-size: 1.125rem;
  padding: 10px;
  margin-right: 2px;
  color: #fff;
  font-weight: 600;
`;

export const TituloEmpresa = styled.p`
  font-size: 1.3em;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  margin-top: -5px;
`;

export const List = styled.ul`
  li {
    h3 {
      margin-top: 65%;
      font-size: 1.3em;
      color: black;
      font-weight: 400;
    }
  }
`;

export const List2 = styled.ul`

  li {
    & + li {
      border-top: solid #eee 2px;
    }
  }
`;

export const List3 = styled.ul`

  li {
    border-radius: 15px;

    &:hover {
      transition-delay: 0s;
      transform: scale(1.02);

      box-shadow: 0px 0px 15px rgba(80,80,80, 0.6);
    }

    border-bottom: solid #eee 2px;
    margin-bottom: 15px;
    @media (max-width: 980px) {
      & + li {
        border-top: solid #eee 2px;
      }
    }
  }
`;

export const DivBannerDestaque = styled.section`
  position: relative;

  padding: 5px;
  text-align: center;
  // margin-right: 2.66%;
  // margin: 2em;

  @media (max-width: 980px) {
    margin-top: 25px;
  }
  align-items: center;
`;

export const ImgBannerDestaque = styled.img`
  max-width: 240px;
  max-height: 300px;
  height: auto;
  width: 100%;
  // max-height: 9rem;
  margin-top: 5px;

  @media (max-width: 980px) {
    margin-top: -10px;
  }

  padding: 0;
  border-radius: 5px;
  // position: cent;
`;
