import React from 'react';

import {
  TituloEmpresa,
  List2,
  DivBannerDestaque,
  ImgBannerDestaque,
  TtiutloEvento,
} from './styles';

export default function EmpresasDestaque() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="row">
            <h4 className="blue-text"> Empresas destaque </h4>
            <hr />
          </div>
          <List2 key="sdfd">
            <li className="col s12 l4">
              <DivBannerDestaque className="col s5 l12">
                <ImgBannerDestaque
                  style={{ marginTop: -16 }}
                  src="https://i0.wp.com/www.expressaorondonia.com.br/v2017/wp-content/uploads/2017/08/lojas-americanas.jpg?fit=1152%2C768&ssl=1"
                  alt="Americanas"
                />
              </DivBannerDestaque>
              <section className="col s7 l12">
                <TituloEmpresa className="black-text">Americanas</TituloEmpresa>
                <p className="hide-on-small-only">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
                <label htmlFor="">Rua Juazeiro, 6763, Lagoinha</label>
                <p>
                  <a href="">Ver Mais</a>
                </p>
              </section>
            </li>

            <li className="col s12 l4">
              <DivBannerDestaque className="col s5 l12">
                <ImgBannerDestaque
                  style={{ marginTop: -16 }}
                  src="https://i0.wp.com/www.expressaorondonia.com.br/v2017/wp-content/uploads/2017/08/lojas-americanas.jpg?fit=1152%2C768&ssl=1"
                  alt="Americanas"
                />
              </DivBannerDestaque>
              <section className="col s7 l12">
                <TituloEmpresa className="black-text">Americanas</TituloEmpresa>
                <p className="hide-on-small-only">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
                <label htmlFor="">Rua Juazeiro, 6763, Lagoinha</label>
                <p>
                  <a href="">Ver Mais</a>
                </p>
              </section>
            </li>

            <li className="col s12 l4">
              <DivBannerDestaque className="col s5 l12">
                <ImgBannerDestaque
                  style={{ marginTop: -16 }}
                  src="https://i0.wp.com/www.expressaorondonia.com.br/v2017/wp-content/uploads/2017/08/lojas-americanas.jpg?fit=1152%2C768&ssl=1"
                  alt="Americanas"
                />
              </DivBannerDestaque>
              <section className="col s7 l12">
                <TituloEmpresa className="black-text">Americanas</TituloEmpresa>
                <p className="hide-on-small-only">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
                <label htmlFor="">Rua Juazeiro, 6763, Lagoinha</label>
                <p>
                  <a href="">Ver Mais</a>
                </p>
              </section>
            </li>

            <li className="col s12 l4">
              <DivBannerDestaque className="col s5 l12">
                <ImgBannerDestaque
                  style={{ marginTop: -16 }}
                  src="https://i0.wp.com/www.expressaorondonia.com.br/v2017/wp-content/uploads/2017/08/lojas-americanas.jpg?fit=1152%2C768&ssl=1"
                  alt="Americanas"
                />
              </DivBannerDestaque>
              <section className="col s7 l12">
                <TituloEmpresa className="black-text">Americanas</TituloEmpresa>
                <p className="hide-on-small-only">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
                <label htmlFor="">Rua Juazeiro, 6763, Lagoinha</label>
                <p>
                  <a href="">Ver Mais</a>
                </p>
              </section>
            </li>
          </List2>
        </div>
      </div>
    </div>
  );
}
