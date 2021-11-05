

import {Container} from './styled'
import Cabecalho from  '../../componentes/comum/cabecalho'


export default function ChLinkt () {
    return (

        <Container>

            <Cabecalho/>

          <div class="conteudo">
              <div class="imagem">
                <img src="/assets/imagens/pg-denuncia.png" alt=""/>
              </div>

              <div class="informacao">
                  <div class="caracteristicas">
                      <div class="titulo">Caracteristicas</div>
                      
                      <div class="imagem1">
                        <button><img src="/assets/imagens/pg-denuncia-img1.png" alt=""/></button>
                      </div>
                  </div>

                  <div class="denuncia">
                      <div class="chat">Chat de Deuncias</div>

                      <div class="imagem2">
                        <button><img src="/assets/imagens/pg-denuncia-img2.png" alt=""/></button>
                      </div>
                  </div>
              </div>
          </div>
      </Container>

    )
}

      