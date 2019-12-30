import styled from 'styled-components';

export const List = styled.ul`
  position: relative li {
    margin-top: 25px;

    & + li {
      @media (max-width: 920px) {
        margin-top: 15px;
        border-top: solid 2px #eee;
      }
    }

    a {
      text-decoration: none;
    }
  }
`;

export const DivImg = styled.section`
  width: auto;
  height: 350px;
  background: url(${props => props.bg}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border: solid #eee 2px;
`;

export const DivEmpresaDestaque = styled.section`
  transition: transform 0.2s;
  margin: 0;

  &:hover {
    transform: scale(1.02);
    // border: solid #eee 1px;
    // border-radius: 5px;
    box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 920px) {
    border-bottom: solid 2px #eee;
  }
`;

export const DivLogo = styled.div`
  width: 70px;
  height: 70px;
  background: #fff;
  float: left;
  margin-right: 10px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
`;

export const LogoIMG = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  flex-shrink: 0;
`;

export const DivInfo = styled.div`

  h3 {
    margin-left: 25px;
    font-size: 2.3em;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -.035em;
    color: rgba(0,0,0,0.8);

  }
  p {
    color: grey
  }
  a {
    display: flex;
    align-items: center;
    i {
      padding-right: 15px;
    }
  }

  h4 {
    position:absolute;
    bottom:0
    font-size: 15px;
    font-weight: 500;

  }
  h6 {
    font-weight: 500;
  }
`;

export const DivEmpresas = styled.div`
  border: solid 1px #eee;
  position: relative;
  padding: 5px;
  width: 100%;
  text-align: center;
  // margin-right: 2.66%;
  // margin: 2em;

  @media (max-width: 920px) {
    margin: 0em;
  }

  border-bottom: 1px solid #dddddd;
  background-color: #fff;
  align-items: center;
`;

export const ImgEmpresas = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;

  flex-shrink: 0;
`;

export const InfosEmpresas = styled.section`
  h5 {
    font-size: 1.4em;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.035em;
    color: #2761c9;
  }
  a {
    display: flex;
    align-items: center;
    i {
      padding-right: 15px;
    }
  }
`;
