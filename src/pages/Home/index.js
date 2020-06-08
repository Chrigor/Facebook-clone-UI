import React from 'react';
import { Container, ContainerPosts, ContainerMessenger } from './style';
import AsideLeft from '../../componentes/AsideLeft';
import AsideRight from '../../componentes/AsideRight';
import Post from '../../componentes/Post';
const avatar = "https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg";

const data = [
  {
    nome: "Chrigor Eduardo",
    urlPost: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    urlFoto: avatar,
    descricao: "usdhusahduhsauhdusa kikliolopçpçpppppppppppppppppppppppppppppppppppppppppppppppppppppi ijijij..ij.j.j jij.i.iuj.i.jjiui.ji.ijj.çppçpçpçpçpçpçpç",
  },
  {
    nome: "Chrigor Eduardo",
    urlPost: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
    urlFoto: avatar,
    descricao: "usdhusahduhsauhdusa",
  },
  {
    nome: "Chrigor Eduardo",
    urlPost: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
    urlFoto: avatar,
    descricao: "usdhusahduhsauhdusa",
  },
]

function Home() {
  return (
    <Container>
      <AsideLeft />
      <ContainerPosts>

        {
          data.map((elemento, indice) => {

            let { nome, urlPost, urlFoto, descricao } = elemento;

            return (
              <Post
                nome={nome}
                urlPost={urlPost}
                urlFoto={urlFoto}
                descricao={descricao}
                key={indice}
              />
            )
          })
        }

      </ContainerPosts>

      <ContainerMessenger>
        <AsideRight />
      </ContainerMessenger>

    </Container>
  )
}

export default Home;