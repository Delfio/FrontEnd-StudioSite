import React, {useEffect, useState} from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import api from '../../../../services/api';

import { Container } from './styles';

export default function FileInput(props) {

  const [permitido, setPermissao] = useState(false);
  const [imageLimit, setImageLimit] = useState(false);

  const { id } = props.match.params;
  const { user_id } = props.match.params;

  const user = useSelector(state => state.user.profile);

  useEffect(() => {
    async function verifyPermission(){
      if(user_id != user.id){
        setPermissao(false)
      }else{
        setPermissao(true)
      }
      const response = await api.get(`/classificados/${id}`)
      const {imagens} = response.data;

      if(imagens.length > 4){
        setImageLimit(false)
      }else(
        setImageLimit(true)
      )
    }

    verifyPermission()
  }, [])

  async function handleSubmit(files, allFiles) {
    const data = new FormData()
    files.map(f => {
      console.log(f)
      console.log(data.append('imagens_cadastro', f.file))
      // const response = await api.post(`classificados/${id}/imagem`, {})
    })
    // console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (

    <div className="container">
      {permitido? (
        <Container className="col s12">
        <h1 className="header red-text"> Imagens do classificado </h1>
        <hr/>
        <h6>1. Insira até 3 Imagens por produto e clique em 'Enviar'</h6>
        <h6>2. As imagens deve ser nítidas e claras</h6>
        <h6>3. De preferência as fotos tiradas na horizontal 'Quadradas'</h6>
        <h6>4. Tamanho máximo por imagem '2 MB'</h6>
        <br/>
          <Dropzone
            disabled={!imageLimit}
            inputWithFilesContent="Adicionar imagem"
            inputContent="Selecione ou arraste imagem"
            submitButtonContent="Enviar"
            onSubmit={handleSubmit}
            accept="image/*"
            maxSizeBytes={2048*2048}
            maxFiles={3}
          />
        </Container>
      ): (
        <h2>sdf</h2>
      )}

    </div>
  );
}
