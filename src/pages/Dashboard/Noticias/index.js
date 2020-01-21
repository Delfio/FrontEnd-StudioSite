import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';

import {cadastroNoticiaRequest} from '../../../store/modules/user/actions'

import { Container } from './styles';

const schema = Yup.object().shape({
  titulo: Yup.string()
    .required('Insira um titulo da notícia'),
  brev_descricao: Yup.string()
    .required('Insira uma breve descrição')
    .max(25, 'Maximo de 30 Caractere'),
  descricao: Yup.string()
    .required('Insira a descrição da Notícia')
    .min(30, 'Minimo de 30 Caractere'),
  tipo: Yup.number()
    .min(1)
    .max(8)
    .default(8)
})

export default function Noticias() {

  const[autorizado, SetAutorizado] = useState(false);
  const[tipo, setTipo] = useState(8);

  const user = useSelector(state => state.user.profile);

  const dispatch = useDispatch();
  useEffect(() => {
    if(user.ADM) SetAutorizado(true);

  }, [])

  async function handleSbumit(data){
    await dispatch(cadastroNoticiaRequest({
      titulo: data.titulo,
      brev_descricao: data.brev_descricao,
      descricao: data.descricao,
      tipo: tipo
    }))

    // console.log({
    //   titulo: data.titulo,
    //   brev_descricao: data.brev_descricao,
    //   descricao: data.descricao,
    //   tipo: tipo
    // })
  }

  return (
    <div className="container">
      <Container className="cols12">
        {autorizado? (
          <>
          <h1 className="red-text">Nova Notícia</h1>
          <hr />
          <h6>. As noticias possuem classificação</h6>
          <h6>. As classificações variam de 1 a 8</h6>
          <h6>. As classificações vão de 1 = 'Noticia Principal' e 8 = 'Veja Também'</h6>
          <h6>. Toda a listagem é feita de acordo com o ultimo cadastro realizado</h6>
          <br/>
          <Form schema={schema} onSubmit={handleSbumit}>
            <div className="col s12 hide-on-small-only">
              <h5 className="grey-text">Preencha os campos abaixo</h5>
            </div>
            <div className="input-field col l12 s12">
              <Input name="titulo" id="titulo" type="text" className="validate" />
              <label htmlFor="titulo">Titulo da Notícia *</label>
            </div>
            <div className="input-field col l12 s12">
              <Input name="brev_descricao" id="brev_descricao" type="text" className="validate" />
              <label htmlFor="brev_descricao">Breve descrição *</label>
            </div>
            <p>Descrição: </p>
            <div className="input-field col l12 s12">
              <Input multiline  name="descricao" id="descricao" type="text" />
              <label htmlFor="descricao">Descrição da Notícia *</label>
            </div>
            <p>Classificação: </p>
            {/* Linha 1 */}
            <div className="row">
              <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}} className="col s12">
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                  <label>
                    <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 1 ? true : false} onChange={e => setTipo(1)}/>
                    <span className="blue-text">1</span>
                  </label>
                </div>

                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                  <label>
                    <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 2 ? true : false} onChange={e => setTipo(2)}/>
                    <span className="blue-text">2</span>
                  </label>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                  <label>
                    <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 3 ? true : false} onChange={e => setTipo(3)}/>
                    <span className="blue-text">3</span>
                  </label>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                  <label>
                    <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 4 ? true : false} onChange={e => setTipo(4)}/>
                    <span className="blue-text">4</span>
                  </label>
                </div>

              </div>
            </div>
          {/* Linha 1 */}

          {/* Linha 2 */}
            <div className="row">
              <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}} className="col s12">

                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                  <label>
                    <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 5 ? true : false} onChange={e => setTipo(5)}/>
                    <span className="blue-text">5</span>
                  </label>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                  <label>
                    <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 6 ? true : false} onChange={e => setTipo(6)}/>
                    <span className="blue-text">6</span>
                  </label>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                  <label>
                    <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 7 ? true : false} onChange={e => setTipo(7)}/>
                    <span className="blue-text">7</span>
                  </label>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', padding: 15}} className="col s3">
                  <label>
                    <Input value="1" name="destaque" id="destaque" type="radio" className="validate" checked={tipo == 8 ? true : false} onChange={e => setTipo(8)}/>
                    <span className="blue-text">8</span>
                  </label>
                </div>

              </div>
            </div>
          {/* Linha 2 */}

            <div style={{marginTop: 15}} className="col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
                <i className="material-icons right">send</i>
              </button>
            </div>
          </Form>
          </>
        ):(
          <h2>Não autorizado</h2>
        ) }

      </Container>
    </div>
  );
}
