import React, {useEffect ,useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import api from '../../../services/api';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Propaganda from '../../../components/Propagandas'

import { Container, List, Section, Li } from './styles';

  document.addEventListener('DOMContentLoaded', async function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {});
    var img = await document.querySelectorAll('.materialboxed');
    console.log(img);
    var imgInstance = M.Materialbox.init(img, {})
  });


export default function DetailsClassificado(props) {

  const [classificado, setClassificado] = useState({});

  const [imgs, setImgs] = useState([])

  const [data, setData] = useState('');

  const [img1, setImg1] = useState({})
  const [img2, setImg2] = useState({})
  const [img3, setImg3] = useState({})

  const { id } = props.match.params;

  useEffect(() => {
    async function loadClassificad() {
      const response = await api.get(`/classificados/${id}`)
      setClassificado(response.data);

      setImgs(response.data.imagens)

      if(response.data.imagens[0]){
        setImg1(response.data.imagens[0])
      }
      if(response.data.imagens[1]){
        setImg2(response.data.imagens[1])
      }
      if(response.data.imagens[2]) {

        setImg3(response.data.imagens[2])
      }

      const data = format(parseISO(response.data.created_at), "'Dia' dd 'de' MMM", {locale: pt});

      setData(data);
    }
    loadClassificad();
  }, [])

  return (
    <div className="container">
      <Container className="col s12">
        <h4>{classificado.titulo}</h4>
          <div className="row">
            <div className={`col s12 l8 xl7 ${imgs.length > 0 ? null: 'hide'}`}>
              <div className="slider">
                <ul className="slides">
                  <Li bg={img1.url} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                      className={`${imgs.length >= 1 ? null : 'hide'}`}>
                        <img style={{width: '100%', height: '100%', maxWidth: '600px', alignItems: 'center', display: 'flex', position: 'center'}} className="responsive-img materialboxed" src={img1.url} />

                  </Li>
                  <Li style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className={`${imgs.length >= 2 ? null : 'hide'}`}>
                    <img style={{width: '100%', height: '100%', maxWidth: '600px', alignItems: 'center', display: 'flex', position: 'center'}} className="responsive-img" src={img2.url} />
                  </Li>
                  <Li style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className={`${imgs.length >= 3 ? null : 'hide'}`}>
                    <img style={{width: '100%', height: '100%', maxWidth: '600px', alignItems: 'center', display: 'flex', position: 'center'}} className="responsive-img" src={img3.url} />
                  </Li>
                </ul>
              </div>

              <List>
                {imgs.map(el => (
                  <li key={el.id} className="col s6 l4">
                    <Section className="col s12" bg={el.url} />
                  </li>
                ))}
                <div className="row">
                  <div className="col s12">
                    <h5>{classificado.preco}</h5>
                    <br/>
                    <p>
                      {classificado.descricao}
                    </p>
                    <br/>
                    <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-around'}} className="col s2">
                      <i className="material-icons blue-text">local_phone</i>
                      <a href={`tel:${classificado.fone_contato}`}>
                        {classificado.fone_contato}
                      </a>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            {/* Caso não tenha imagem */}
            <div className={`col s12 l8 ${imgs.length > 0 ? 'hide': null}`}>
              <div className="col s12 l12">
                <img style={{maxWidth: 800, maxHeight: 500}} className="responsive-img" src="http://www.thebristolarms.com.au/wp-content/uploads/2018/03/img-not-found.png" alt="not Found"/>
              </div>
            </div>
            <Propaganda />
          </div>
      </Container>
    </div>
  );
}
