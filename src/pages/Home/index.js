import React from 'react';
import { Container, ContainerPosts, ContainerMessenger } from './style';
import Aside from '../../componentes/Aside';
import Post from '../../componentes/Post';
const avatar = "https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg";

const data = [
  {
    nome: "Chrigor Eduardo",
    urlPost: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    urlFoto: avatar,
    descricao: "usdhusahduhsauhdusa",
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
      <Aside />
      <ContainerPosts>

        {
          data.map((elemento) => {

            let { nome, urlPost, urlFoto, descricao } = elemento;

            return (
              <Post
                nome={nome}
                urlPost={urlPost}
                urlFoto={urlFoto}
                descricao={descricao}
              />
            )
          })
        }

      </ContainerPosts>

      <ContainerMessenger>

      </ContainerMessenger>

    </Container>
  )
}

export default Home;