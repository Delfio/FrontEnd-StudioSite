import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 25px;
  padding: 0;

  a {
    text-decoration: none;
  }

  li {
    background-color: #ffff;

    border-radius: 5px;

    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;

    &:hover {
      background-color: #f9f7f7;
    }

    section {
      h5 {
        margin-top: 1.125rem;
        font-weight: 600;
        text-decoration: none;
        font-size: 1.125rem;
        line-height: 1.2;
      }
      h2 {
        margin-top: 1.125rem;
        font-size: 2rem;
      }
      label {
        color: blue;
        bottom: 0;
      }
    }

    & + li {
      margin-top: -5px;
      border-top: solid 2px #eee;
    }
  }
`;

export const ImgAnuncio = styled.img`
  max-width: 200px;
  max-height: 150px;
  height: auto;
  width: 100%;
  // max-height: 9rem;
  margin-top: 5px;
  padding: 0;
  border-radius: 5px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Parceiros = styled.h5`
  font-size: 1.125rem;
  padding: 10px;
  margin-right: 2px;
  color: #fff;
  font-weight: 600;
`;
