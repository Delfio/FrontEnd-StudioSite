import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import {toast} from 'react-toastify';

import Form from './Form';
import Imagens from './Imagens';

import { Link } from 'react-router-dom';

import api from '../../../../services/api';

import { Container} from './styles';

export default function Files(props) {

  const { id } = props.match.params;
  const [autororizado, setAutorizacao] = useState(false);

  const [tipo, setTipo] = useState();

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    async function load() {
      try{
        if(!user.ADM){
          setAutorizacao(false)
        }else{
          setAutorizacao(true)
        }

        const response  = await api.get(`principal/${id}`)
        setTipo(response.data.tipo)

      } catch(err){
        setAutorizacao(false);
        toast.error('Algo deu errado!')
      }
    }
    load();
  }, [])

  return (
    <div className="container">
      <Container className="col s12">
        { autororizado? (
          <>
          <h1 className="red-text">Cadastro de Conteúdos Principais</h1>
          <hr/>
          {tipo == 1 ? (
            <>
            <h6>. Este conteúdo ira ser exibido como um video na página principal</h6>
            <h6>. Adicione a url do video assim como indicado abaixo</h6>
            <br/>
            <Form id={id} />
            </>
          ) : tipo == 2 ? (
            <>
            <h6>. Este conteúdo ira ser como imagens e textos ao lado do video na página principal</h6>
            <h6>. Adione Imagens e videos relacionados</h6>
            <h6>. A ultima imagem será sempre a principal</h6>
            <br/>
            <Imagens id={id} />
            <br/>
            <Form id={id} />
            </>
          ): tipo == 3? (
            <>
            <h6>. Este conteúdo ira ser exibido como um video na página de empresas</h6>
            <h6>. Adicione a url do video assim como indicado abaixo</h6>
            <br/>
            <Form id={id} />
            </>
          ): null}

          </>
        ): (
          <h1 className="red-text">Não autorizado</h1>

        ) }
      </Container>
    </div>
  );
}
