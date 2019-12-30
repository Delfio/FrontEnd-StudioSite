import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-right: -16px;
  margin-bottom: 16px;
  margin-left: -16px;
  padding-right: 4px;
  padding-left: 4px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style-type: none;

  li {
    width: 33.32%;
    margin-bottom: 16px;
    padding-right: 12px;
    padding-left: 12px;
    float: left;
    display: list-item;
    text-align: -webkit-match-parent;
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
