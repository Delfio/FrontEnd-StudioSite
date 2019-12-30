import React, { Component } from 'react';

import {
  TxtNoticiaPrincipal,
  DivNoticia,
  TxtNoticiasSecundarias,
  Huipremiumphoto,
  TituloNoticia,
  List,
} from './styles';

export default class Noticias extends Component {
  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="row">
            <DivNoticia className="col s12 l6">
              <a href="">
                <TxtNoticiaPrincipal>
                  Ministros do STF: 'juiz de garantias' não vale em processo de
                  Flávio
                </TxtNoticiaPrincipal>
              </a>
              <section className="col s12 l12">
                <a href="">
                  <TxtNoticiasSecundarias>
                    Bolsonaro rebate criticas e disse "Não sou escravo de todo
                    mundo
                  </TxtNoticiasSecundarias>
                </a>
              </section>
              <section className="col s12 l12">
                <a href="">
                  <TxtNoticiasSecundarias>
                    Presidente de associação diz que juiz de garantias 'gera
                    preocupação'
                  </TxtNoticiasSecundarias>
                </a>
              </section>

              <div className="col s12 l11 center-alignt">
                <hr />
              </div>

              <section className="col s4 l4">
                <a href="">
                  <TituloNoticia className="red-text">
                    {' '}
                    Bolsonaro: carne no Alvorada só 2 vezes na semana
                  </TituloNoticia>
                </a>
              </section>
              <section className="col s4 l4">
                <a href="">
                  <TituloNoticia className="red-text">
                    {' '}
                    Bolsa fecha pela 1ª vez acima dos 117 mil pontos
                  </TituloNoticia>
                </a>
              </section>
              <section className="col s4 l4">
                <a href="">
                  <TituloNoticia className="red-text">
                    {' '}
                    PF indicia Lula, Palocci e mais duas pessoas
                  </TituloNoticia>
                </a>
              </section>

              <div className="col s12 l11 center-alignt">
                <hr />
              </div>

              <div className="col s12 l4">
                <a href="">
                  <section className="col s6 l12">
                    <Huipremiumphoto src="https://jhnoticias.com.br/wp-content/uploads/2018/06/22506683388_2bb73d2bbd_b.jpg" />
                  </section>
                  <section className="col s6 l12">
                    <TituloNoticia className="red-text">
                      {' '}
                      Confusão nas lojas Marisa{' '}
                    </TituloNoticia>
                  </section>
                </a>
              </div>

              <div className="col s12 l4">
                <a href="">
                  <section className="col s6 l12">
                    <Huipremiumphoto src="https://jhnoticias.com.br/wp-content/uploads/2018/06/22506683388_2bb73d2bbd_b.jpg" />
                  </section>
                  <section className="col s6 l12">
                    <TituloNoticia className="red-text">
                      {' '}
                      Confusão nas lojas Marisa{' '}
                    </TituloNoticia>
                  </section>
                </a>
              </div>

              <div className="col s12 l4">
                <a href="">
                  <section className="col s6 l12">
                    <Huipremiumphoto src="https://jhnoticias.com.br/wp-content/uploads/2018/06/22506683388_2bb73d2bbd_b.jpg" />
                  </section>
                  <section className="col s6 l12">
                    <TituloNoticia className="red-text">
                      {' '}
                      Confusão nas lojas Marisa{' '}
                    </TituloNoticia>
                  </section>
                </a>
              </div>

              <div className="row">
                <div className="hide-on-med-and-up">
                  <div className="col s12">
                    <hr />
                  </div>
                </div>
              </div>
            </DivNoticia>

            <div className="col s12 l6">
              <a href="">
                <div className="col s6 l6">
                  <Huipremiumphoto
                    src="http://www.agroboinet.com.br/mobile/images/LOJA%202%20DISTRITO_mod.JPG"
                    alt=""
                  />
                  <section className="">
                    <TituloNoticia className="blue-text">
                      Empresa envolvida em confusões
                    </TituloNoticia>
                  </section>
                </div>
              </a>

              <a href="">
                <div className="col s6 l6">
                  <Huipremiumphoto
                    src="https://seucreditodigital.com.br/wp-content/uploads/2019/01/crefisa.jpg"
                    alt=""
                  />
                  <section className="">
                    <TituloNoticia className="blue-text">
                      Crefisa disponibilisa crédito especial
                    </TituloNoticia>
                  </section>
                </div>
              </a>

              <a href="">
                <div className="col s6 l6">
                  <Huipremiumphoto
                    src="https://cdn1.rondoniagora.com/uploads/noticias/2018/10/29/5bd77ee690ca1.png"
                    alt=""
                  />
                  <section className="">
                    <TituloNoticia className="blue-text">
                      Porto Velho Shopping contrata
                    </TituloNoticia>
                  </section>
                </div>
              </a>

              <a href="">
                <div className="col s6 l6">
                  <Huipremiumphoto
                    src="http://www.rondonoticias.com.br/Upload/Noticias/Materia/30-06-2018-09-11-49.jpg"
                    alt=""
                  />
                  <section className="">
                    <TituloNoticia className="blue-text">
                      UNIMED anuncia novo processo de seleção
                    </TituloNoticia>
                  </section>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="hide-on-med-and-up">
                <div className="col s12">
                  <h4 htmlFor="hr">Noticias</h4>
                  <hr />
                </div>
              </div>
              <a href="">
                <div className="col s12 l4">
                  <section className="col s12">
                    <Huipremiumphoto src="data:image/jpeg;base64,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" />
                  </section>
                  <section>
                    <TituloNoticia className="red-text">
                      Ministro Critica ato de Bolsonaro ao aprovar pacote anti
                      crime de partidos de esquerda 'PSOL'
                    </TituloNoticia>
                  </section>
                </div>
              </a>

              <div className="row hide-on-med-and-up">
                <div className="col s12">
                  <hr />
                </div>
              </div>

              <a href="">
                <div className="col s12 l4">
                  <section className="col s6 l12">
                    <Huipremiumphoto src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/09/12881918544_29cacd03b0_o7-539x338.jpg" />
                  </section>
                  <section className="">
                    <TituloNoticia className="blue-text">
                      O futuro do futebol no Brasil
                    </TituloNoticia>
                  </section>
                </div>
              </a>

              <div className="row hide-on-med-and-up">
                <div className="col s12">
                  <hr />
                </div>
              </div>

              <a href="">
                <div className="col s12 l4">
                  <section className="col s6 l12">
                    <Huipremiumphoto src="http://itnet.com.br/imagens/noticias/page_3506352957fec73fe7da.jpg" />
                  </section>
                  <section className="">
                    <TituloNoticia className="orange-text">
                      Concurso de beleza gera polêmica em RJ
                    </TituloNoticia>
                  </section>
                </div>
              </a>

              <div className="row hide-on-med-and-up">
                <div className="col s12">
                  <hr />
                </div>
              </div>
            </div>
          </div>

          <div className="row hide-on-med-and-down">
            <div className="col s12 l4">
              <hr />
            </div>
            <div className="col s12 l4">
              <hr />
            </div>
            <div className="col s12 l4">
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col s12 l4">
              <List key="name">
                <li className="col s12">
                  <a className="red-text" href="">
                    'Natal mais lucrativo dos ultimos 5 anos' Afirma lojistas
                  </a>
                </li>
                <li className="col s12">
                  <a className="red-text" href="">
                    'Neste fim de ano tome cuidado com as praias' Avisa PM
                  </a>
                </li>
                <li className="col s12">
                  <a className="red-text" href="">
                    Porto Velho pode ter o verão mais quente dos ultimos 4 anos
                  </a>
                </li>
                <li className="col s12">
                  <a className="red-text" href="">
                    Talismã 21 anuncia show de reveilon
                  </a>
                </li>
              </List>
            </div>

            <div className="col s12 l4">
              <List key="name">
                <li className="col s12">
                  <a className="blue-text" href="">
                    'Natal mais lucrativo dos ultimos 5 anos' Afirma lojistas
                  </a>
                </li>
                <li className="col s12">
                  <a className="blue-text" href="">
                    'Neste fim de ano tome cuidado com as praias' Avisa PM
                  </a>
                </li>
                <li className="col s12">
                  <a className="blue-text" href="">
                    Porto Velho pode ter o verão mais quente dos ultimos 4 anos
                  </a>
                </li>
                <li className="col s12">
                  <a className="blue-text" href="">
                    Talismã 21 anuncia show de reveilon
                  </a>
                </li>
              </List>
            </div>

            <div className="col s12 l4">
              <List key="name">
                <li className="col s12">
                  <a className="orange-text" href="">
                    'Natal mais lucrativo dos ultimos 5 anos' Afirma lojistas
                  </a>
                </li>
                <li className="col s12">
                  <a className="orange-text" href="">
                    'Neste fim de ano tome cuidado com as praias' Avisa PM
                  </a>
                </li>
                <li className="col s12">
                  <a className="orange-text" href="">
                    Porto Velho pode ter o verão mais quente dos ultimos 4 anos
                  </a>
                </li>
                <li className="col s12">
                  <a className="orange-text" href="">
                    Talismã 21 anuncia show de reveilon
                  </a>
                </li>
              </List>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <h4>Veja Também</h4>
              <hr />
            </div>
            <div className="row">
              <div className="col s12">
                <a href="">
                  <div className="col s12 l4">
                    <section className="col s12">
                      <Huipremiumphoto
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEBIVFh
                          UXFxYWFhUXFxcYFxUWFRUYGRgXFRUYHSggGR0lGxgYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0O
                          FxAQFS0dFx0rLSstKy0tKy0rLS0tLSstLS0rLS0rLS0tLS0tLS0tLS0tKy04LS0rLS0uListNzc3K/
                          /AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAD8QAAEDAgMF
                          BgMGBQMEAwAAAAEAAhEDIQQSMQVBUWFxBiKBkaGxEzLBQlKS0eHwFCNicoIHovEkQ7LSM1PC/8QAGQ
                          EBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgICAwEBAAAAAAAAAAECEQMhEjEEQTJRYXEi
                          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"
                      />
                    </section>
                    <section className="col s12">
                      <TituloNoticia>
                        The Witcher é a nova febre do momento
                      </TituloNoticia>
                    </section>
                  </div>
                </a>

                <a href="">
                  <div className="col s12 l4">
                    <section className="col s12">
                      <Huipremiumphoto
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEBIVFh
                          UXFxYWFhUXFxcYFxUWFRUYGRgXFRUYHSggGR0lGxgYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0O
                          FxAQFS0dFx0rLSstKy0tKy0rLS0tLSstLS0rLS0rLS0tLS0tLS0tLS0tKy04LS0rLS0uListNzc3K/
                          /AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAD8QAAEDAgMF
                          BgMGBQMEAwAAAAEAAhEDIQQSMQVBUWFxBiKBkaGxEzLBQlKS0eHwFCNicoIHovEkQ7LSM1PC/8QAGQ
                          EBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgICAwEBAAAAAAAAAAECEQMhEjEEQTJRYXEi
                          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"
                      />
                    </section>
                    <section className="col s12">
                      <TituloNoticia>
                        The Witcher é a nova febre do momento
                      </TituloNoticia>
                    </section>
                  </div>
                </a>

                <a href="">
                  <div className="col s12 l4">
                    <section className="col s12">
                      <Huipremiumphoto
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEBIVFh
                          UXFxYWFhUXFxcYFxUWFRUYGRgXFRUYHSggGR0lGxgYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0O
                          FxAQFS0dFx0rLSstKy0tKy0rLS0tLSstLS0rLS0rLS0tLS0tLS0tLS0tKy04LS0rLS0uListNzc3K/
                          /AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAD8QAAEDAgMF
                          BgMGBQMEAwAAAAEAAhEDIQQSMQVBUWFxBiKBkaGxEzLBQlKS0eHwFCNicoIHovEkQ7LSM1PC/8QAGQ
                          EBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgICAwEBAAAAAAAAAAECEQMhEjEEQTJRYXEi
                          /9oADAMBAAIRAxEAPwDw1CEIBCEIBCEIBCEIBCEIBCEIBCEIBCFN2VgTWfl3C7jyQWHZvZfxHZ3juj/d+i1uzqP2jq6fDl++C67EoAOy6AW+iuDs4sju2O/xut+nO9qTauAnvgSHD1GoVWKZbYHj6gQtmzBF/wDL43b13hccTsOAZuWndqOII9Vdpph8Ngi6p8Tx6Rw6KRi8MWuAOhiFe4XZ2TTiRB1BjRJtKiC9pi+vlFo6FUvtXbKqiZDdAYHMyB9VKruFTKHCDqDzmUuCwvwjBiSC7xNgD+KVIqtBqAAWHtu87qWrpzq0e6Ht00PIrirahQzU3MjjHUae3qqiElWwoQkSqoEhQlRQhCEQJE5IihCEIgQhCAT6LJMTCZCAg82QhC5OgQhCAQhCAQhCAQhCAQhCAQhCAWv7I4X+UXxdzoHMAWnxlZFoXo/Z3CxQpjfAPjr9VrFnL0vdlbNPxAdxutgzDA/yx3ovMaKj2Ox0d310Wm2ZYBc+XPxdvj8UzvaIdnNb3ibagRdpG8FMx1ek8gwM4aBmj5h/UrPHS023qg2qxoh2h5Ljjy/t3z+L1uI+KwQc5uW0wSelvqs5tVopvaDc54H19grl+1XNbMdDCyG1sZmfNzHgB+q9M5JY8t4cp9JNd0uLgbyAOmv0CmUBfjvPM/8AKpKNQnfAVnsyrmdl4H8VvZXy2zcdLfCTJsMoAjiTv+ip61OHEcz7rQtCpMSzvu6lIlRciTIpGVLkWkRsqTKpWRNdTQRoQupYmFqoahOhJCBEIQiFSIQgEJEIPN0IQuToEIQgEIQgEIQgEIQgEIQgEoSLpTYSbINH2A7OHHYprHWps79Q/wBIOk81vG5TWeG2aHuaB/SCQI8Fbf6VbG+BhhUdGasXEwNGMmOswqqlSDMQ5h0zm/D9yt4ueVaXBYbI119RaNfw71Y7MOjfZVOIrEw2kNIk7o8FY4OnGpvv/wCV5OfKb0+h8PC91oHUg5oPD1WP7UOvAWuZT7kyTbWP3KyHaAt3a9FxeqKakJpefus/tKkIPh6kK+wt2RzKpNo6OseXgVvFzzV+GZaFZYHuOBVZg3QdFdYSjm9l6Y8WX2uDJBggGLEiQDxibqqrtAcQP3bVLjdpCi1ucGXSBETLY4rjhnuc2XgB0mQJtB0M7wtxy8brZwC6BqVrU8NWmTMiDTXYNTwxDSKaKYaCsG0074SbNKs4dMNAq2NJNNFNmlO6kU001bmimGgrs0qiwpMitDh000E2mlcGJwpqaaKT4SDyVCELm2EIQgEIQgEIQgEIQgEIQgcPVXPZ7BOqV6dNtyXAWvlEy4+U+KqMtp5x+wvQP9OaWQOqxDgS0HfcNzeseSsSvR6+IbRpMpssGMDfACL+AVbs7AGoRVmxuTzRjLtgjn+ypPZ2ofhNc4wJdYSYBJgrNy1W8cZYkYVgBeN0gdbJr9vUKRh778AJKlUKcgxvJPPVZ7tRsF7wX06bXHU7vyXjussrt9TGXHjmmywfaDDPYAKrbgiDYg+KyvaSs3vFrp4LzbbGzK9FzQ2obi5GaBfSCbReZO5O2Bs7FV3ljHPdxvbrdbuE/blOS71pu9htzUQ87iR5lV+2sohw4XTdq0a+z8EASDmcSDwlefYrblWqbkxwlaxx36Z5OSY9X2uv49jDcieAWg7O7RbUzjSIN+u5YtlBjrMzTJkujebCLrR9nsLlN48LLtHku6ldppaWVokMJgXu52SPqfBWOHOZgkQ4AZh/Ufm9ZXLbNNkMdUkwTlA0zd0ZnDkAVMeGse06fFieGaCYnjIW9ds2/wDMhraa6NpruGJVdsOYYngJUKBEJUIhEIQqESQnJEDYSFichUMLEhpp6EV4ohCFhQhCEAhCEAhCEAhCEAn02yffkExd6YgA2OaRG+Ppf2QPaM7mtaIGnM3uTzXrHYzChuHE7yDOt3EH6heTYQd62twI5iPZe4YGgadBjRrDZ9x7Ks1eY3Btyl3K3hCyuydo/AqmjVMU3kZXH7BcbEnhJjktbTcKjC06wY5kgCOs5SsLt+hnYZGkg8g/jyv6FYy7deO6rc0mBjnMmbmCPNWlCmHN3SFh+xdQ/wAKzMSS1zmybn5pHoVraFXevFl1X1uO+WLPdoNgNqO+QzpYwFY9neyLMKA+xedw0bPDieam1cS0S42XbBbS+KA4CAJE8eaty6PHtnf9RqIdRAdoBI6yvF8VgwHTpdewdv8AFZ6PdF2fN5ryvE1QXkaXmOq9HF6eL5H5G0jlcL2I9d4Wl7MPzVRwAJ8rrOMpzbdYq92I3I199YHhN11kefK9LzEVZqMYftAjoHSSfQeausdhmOY0RYG+uoMg8iHSfJZkOBxeY6U4A6mLeYPktU1wc4f1McRwtf8A/QW9dOW0NCVzY1SKASJUIBCEIhEickQIhCFVIkTkiBqE6EkIPE0IQsqEIQgEIQgEIQgEIQgcxspzLmB4IbpAGvn0VtsvAg2c0kuGm/LEyfujSN5VErszss1Kre7MkC14AIzE+g/yXthonJpwPiBFvNZDs1gPhm0CBDWjdC3uFqT3dDCVnaozOAc5v2bxzI/fkqftEwZnOjuVGyRyI/WFoqrIe6NCAQOhP0VD2nHw2f2Ejq0w5qxW8a49in92pTOuYO8xB9h5hanDHUcbjxXmuxMf8GoHScodkd/abtPkQfBeiGu0Q9pBsPz9ivLy49vocGfSwGBpvgPdbUiYJhJtOoWQ3D5GRucO6R1BEFUO0MRUzxTGb8lVbQ2s8EtGHrEjWSB1iCZWcY6btvSk7VdpHPNbuy6cro0B4rGPHxIJgO3EcreP6q2x2LY34ncqOL57uUwJM3O9UjMa0GS02PDT92Xr4508XPbtNwQcCAVeYSqGgEkAfMejRJk9YCr6Rbkkwd4362j98Fyx9aSGA2bGcbjF2j2nqF1kee1dYJx+HUrOMOLg48jOngCVqzVAbSfPytg9SyYP4fRYbDVCWZJmAC7jJJcT5wFfY2pGHpkmxc23E5SPqrWVjicfcQAXP+UTprcmNLE6LtTqB12kESRbiFjqeNLaL8URJM0qfFua+YdL6cVF2ZtA0yCCZykZZuXNtlN4MmSOqyreoVNs/bzHBoqGCTE2AnQSJkT6eIm4Y8ESCCOIQKhCRELKRCRAIQhUCEIQCRCEHiSEIWWghCEAhCEAhCECgICcxpNgrLZOzy5wNs32Qbj+526B6+CB1DBluUZCazwCxm5rT9p/uBwWs2Ts8YcZHS6qfn6k6TrvE+SkbO2P/DsNZxLqjz85sSd5AVnsPCFzhUfxm+ttJ6TMcZWmLdrrZGEIMHf7wrvDktqcdY8iFD2cyS0jibfvxU1wPxLaRPmP1WRzrO7xJ3TPt+aqO0Ds9Oo2btNN07i05R6EjyUrG1xDzp3SfGWqurD41JwOr8OW8pa4+5aE01GNwHyVKZHepGDP2qZu3xboDyhX/Z/ahZ/09Uy0Rkdy3Azy0VBhnfz8TO9jSOJhgcY8h5ldcO7M0A6tkTxAMj39Vx5I9HFXotJskOaJJ37rqv7QHEBp+HSLoB0H13Kr2Rtk04BvAseE8lM7S9pwcM4MMOI3HkuPi9U5NfxgsezEwc7A0X46+azpovcQ0iJ9lvqW0Q7Asa/KXnNJPXWVk8RUbBc694bvcbbvFerj7eXmy/u3OriS0BjbWgcBa5PQX8VHY/NJGlmt4mbuJ52Ki1HwCSbnU8BPy+iTBu1cTAFz9PqujztZsxhLXcXFvg2T9VabcIz0KLY/7hPUMMX6z5Kk7MYkuceBFv8AEtj3Kl7fqloc4fP8oGsZswNuZSkVOPxTHOFJpdkYIYNHOcAe8XCxk7+QUUgyZmBewId3SJkE2Em55JaeELmNiBOYQGzoSNZ1kFNNEt7uUAybOAzWNsrt9o9VQ75YIMAX/qgxItz3c+as8BtGtTzZXOIBFjAmBALp1BMTF+iphqDHe3E5QflMW36i/RdG19zjIGYWAIixcTf9wFB6Bgdrtf3XDKYm5EHugnfI13jSCrJeeUK4F4Fs0kiTrlaXfeNwDO5vnebL2w4BsklswZae7J3ncQCLCZBHjEaZC44bEteJGu8GxHULsqBCQlJKKVCSUiBUJJSIPFUIQsqEIQgEIQgEIU3AYIvMmzUHbY+ANZ0Hu023e6LxwHMrX7PbTpkOO/TeY003lVuGADQxg7o8jzj9yrPD07y/8PIcTuHJbY2uqb3VDnfoB3W7gBJ8+KscGZYeNz6T+Sov41pe0EkDLEAW1y/VW2AqNa0OdMPcBPAuk+VlBfbEksaTrBceWZ1vQBWOEGYlxG4g84CbsvCZWX3CAeIjVdMI0guFtPa35KIy/aGqafxRplDW/icPo0qPhK5DWPm2QH8TzPv6Ln24rRUrEaBzZ4XBA8LooAOo0zFsrABxHxfaPZGmW2q74WMqN3ZHkHiGiD6D1TPiw1p6+IsPoUu3wH4hx1/lP/3Pcy/RV2ExecQDp3fAWB8dfFcuSPRxXte4fFAhQdo0c/Xp+qg0quUwtDsPZzqtzoFw9PR+XTLjZlQWzEAX8woWJGTQ34/ReibewzafdjcNOixmP2dnDnMnu3cHRIHFrrTwiN4XXDOuWfHIzr3yuh0DRx8yn0sOZkgi+nDqkcfBd3mavsTkZUa55BYJzEaNtOp1Vh2owwe4OBzBz3OcGkwYaGgSN0z5rLjG5afw227puB8znfp6KbsDbpphrKjiKc62kXvAIvuVZqLhgKRBz/CeH/KWOdOWOExr4rvXyvEGGtzDv5Q4GbSPtAC9lpK/8PWYKgaAS6xzSbRJyHwvzVPidisZIpi4dmkjdABAJ4En0VRTVR3S35gHSCSLcYMToAo9N13AyRGggOidM0X3dZU7GYJzXuaMzgJGgAOXQgDd+96XENDXAyW93/4ybyAB3SBIBuU0uzRlJaJAc7Uy0FoJscsfdv4qXhK/ykEzls4GA17WkiRNv06KAZAaZDZBiS4ugSDDgLRfy4JWVSBADrGZJcDeBbdcHqorRUcUBEFrNXNhzoj5bcCJAlxiD5XmG2rqKkCDE3nWLiB1kWi6xuFxneBFw12YiCBDjeQQYA4zrClUsWYFzuDQXODgcrcpBmIyudM8dN5I3DKgNwQQnLKYTasSWu3aFzrRbvNykSDM5RoB1V/g8e2oBMA3tMgxEwYG8oqWkSpEAhCEHiqEIWVCEIQCEJ0W8UHfBUczo/fVaPAbNNV0ARSaYJ+87eonZTZzqtQBu8hskaSZnwhbaph206ZbSEMbIbNpvdx5krUYtU+KIY4sYLjV3lYcOqr8RtBoaG0zLjv6gkf+PqoG0Mcajvg09Abn75nQ8tyjsqjMYGrmhu75Y4aA2CK0/ZumHMz1Do6eZA3A+JKvqD5pvYSA4CnU/tgwR5O1VfhYFNsQcgmOLjpC64ao01XM3vaSfAhpJ43jwCtR6mG5aQJuMrTPC1/UFQPiBuW/3j5m0qZWqH4DG6zlb4S3gqraMBtNw3hs/ib+ZWWaxfaqqHVsbTmADSf+F7h46FTDVLcDRcDJLGAaTOUmPVVO2H5sZjbf/S1vA5n5gY6F3kplVxGFw7CLuyEDnkM+gCrTJdqqjWl2U/MIH9pqF0eJB8lQ4PEZHTucLqf2gqAuIOsn0/RUkrNjeN12vKN3Ajit52edDYHv5ryyhXINnEc1bYHGknK6o8t/uLd17A9fJcbw2/b0Y/ImP03m3YNQ5o0GpAjzMLM7exNMN+DTe1znRmykENaDMEi0kgeqptoYVkh94I01uNbk2XBr4ENaAI0G/qYut48Xj9s58/lOp7cq+HLTLTcageifiS2cpIOl4PW4/JSfhEgSYPCJPLr4wuj8G0xLZi51J6Ei0ea6OKC5jmEcDpwIPA9EymwEgNAFzMyYH1/VSMYHMJbGaDd0RM6ZhP6xGi4OLXH7p4fkbeqB7KrpDmlxOYRaA2+4fRSam06oY5rqjnOzAwTYSCXEganT1UWbDPceo6hI6n8zhlA3QJN7R4T6JtNJdTalQyHBoaG6E3gmRE3ldKOOLyyGNa0AAmAb3JdfWb+iiNJHy5nOcCJgixAAidSmFo7od3iCQYdAEOgaDfxjers06/EkZmtcYdMuIgGZjnN00vBLg7vuMQCSQJJm868OpXN4+YOcAB9kXMgR18V2ZVkzdoLSABAcS0C2aJud/VQdWU7hokmAcoaZuCbEn+oyugqXMiBBBlvesGySJGYyQJ4Li1sNblysDgZDjLiNDaNLbk2nlMANEB0F7hxMNM8I3KicK7nX7xLnWNwQ+4iYv3SNbXPhM/jS2PhmTAAGZ+a4Jbmbxl0WjdcqrDpJcMzosDlDYJJN73EmYvYo2bU74II3kR9l1rwNOXRQegYWuQKdK5dAzE6w2ziDvvAm5upZcMxaNwB85/JZfZOPDjL57thaW5QJndBkG4nVXWx3Oc11V3/cdmA4NAAb7T4oqeiEIlVHiqEIWVCEIQCflIAPHRMXXD0y45Rv/Y90HpHYHBf9LmbapVc5oO8NswuHOAR4nipPb7G06cUqTotAtoIjOfWOamdnKradJr2/K2nI3EgD0uQvOe0WONeu9+gDiAOQMWWmPszB5Mxa2Q2Ccx+bUQTy5BdNnUC0tP3W5v8AJ2nlKrMLVIf4OH4gR9VbYalETxYZ5Zi8/wDj7Ita/BUj8JriIl4P+LGAA/iJ8lG7IPz13VD8re6N5O7yLkUcWadJpNgKZPH53vf/AOoXbslSyMpje7vuPEgW9x5qsvQ6mIMU2Ge6Z9f35rntGpIH9gB5fZn1CjMrzVZwIk/iP0XDaOJADhyZ7j9U0jF4hwNaqSZNR7BPKkwC3+VT/arntC8NrBg0pU7DdmcwNbpwAKp9jsD6lEuuHEkn+6vGn+IXDtRtMF9Ut1cTyEAkD2PmUVk9rVcznPGkwOlwPSFVlTq7O7PGB6qE7UrNbgautOoRouSlYelINtP3+aQqZhqhyNgzDnTbW4jz4KTSHDuzMkRbxOngmYOj3bCYtrvngpT3ZflF/e8TO7VU/wAMIDRJIA1niDbXhcJHVHPhrbNFiTBmDfLIuZ37oETvDhjHfMzFtWiOR1txXdjxo05JMAxM2tybcG8HwUUxrWMAZccGi7jxP78YUSvskuJLRk5G8+VvUq7wWzwDbUzeSTb7xNzwTcftOjRsQXOjS4afD9RvQZ+q2pS7r2S0b+HR27oVzY5rjLTHofJTsZtGrVBa8hrSDDRu8lS1KRahtYxmMvnTiYsLSFzFMtbq1uYxYEzBm0eC40Mb9lwtvO/9VYvb3ZEEE6ESNIugiA3LWgjM0AviLzJdHA2RTpSWuAm0lxJgEXII3Rbgu9XDzmcJJv3SbWEug9OPBcBULS0Zstw6AOIiTxMeCDqyuRDj/MdmDmkCzZJm/PhySvcHB2aXkEODc0FrXcRFyDAhMDmuDiJYGvkAG2V7oIgb0yvTyFwsy+WbmxANuHdjz6oh9R9iCQYIhrQTBFpzH33p5AY0kCC4mOQPLy8lwqOmNIIF7yQ2Rf8Ae4LvhT8R0H84A1UrUWmzKHcLM2UvgX3NzXt4HyK3VJgaA0aAADoAsCzEHPY3bFnDe4ANFjewdf8Aq01jcYGuHsB4d09W2KrNSEJJSSqj/9k="
                      />
                    </section>
                    <section className="col s12">
                      <TituloNoticia>
                        The Witcher é a nova febre do momento
                      </TituloNoticia>
                    </section>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
