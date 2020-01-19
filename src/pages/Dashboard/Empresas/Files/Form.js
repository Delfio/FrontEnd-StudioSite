import React, {useEffect, useState} from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

const schema = Yup.object().shape({
  nome: Yup.string()
    .required('Favor insira o nome da atividade'),
  descricao: Yup.string()
    .required('Insira a descrição desta atividade')
})

export default function Files({id, servicos, videos}) {

  const [servico, setServidos] = useState(servicos);
  const [video, setVideos] = useState(videos);


  async function handleSubmit(data){
    console.log(data);
  }

  return (
    <div className="row">
      <h4 className="center">Atividades Exercidas pela empresa</h4>
      <Form onSubmit={handleSubmit} schema={schema} className="row">
        <div className="col s12 hide-on-small-only">
          <h5 className="grey-text">Preencha os campos abaixo</h5>
        </div>
        <div className="input-field col l12 s12">
          <Input name="nome" id="nome" type="text" className="validate" />
          <label htmlFor="nome">Nome da atividade *</label>
        </div>
        <div className="input-field col l12 s12">
          <Input name="descricao" id="descricao" type="text" className="materialize-textarea" />
          <label htmlFor="descricao">Descrição da atividade *</label>
        </div>
        <div style={{marginTop: 15}} className="col s12">
          <button className="btn waves-effect waves-light" type="submit" name="action">Confirmar
            <i className="material-icons right">send</i>
          </button>
        </div>
      </Form>

    </div>
  );
}
