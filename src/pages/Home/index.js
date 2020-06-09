import React from 'react';
import { Container, ContainerMain, ContainerMessenger, ContainerStories, ContainerNewPost } from './style';
import AsideLeft from '../../componentes/AsideLeft';
import AsideRight from '../../componentes/AsideRight';
import Post from '../../componentes/Post';
import Storie from '../../componentes/Stories';
import NewPost from '../../componentes/NewPost';

const avatar = "https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg";

const data = [
  {
    nome: "Chrigor Eduardo",
    urlPost: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    urlFoto: avatar,
    descricao: "Teste de descricao",
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
      <ContainerMain>
      <hr />
        <ContainerStories>
          <Storie
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9i7GLXxjOVsUYeCMYxRJnrGas3tLqpG6TiXE-U5zQQX2zCDQ9&usqp=CAU"
            perfil="https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg"
          />
          <Storie
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYZpUGdybshn2sVereHvrIwz53qcTS4w6TYcbWFt_I7SNNqhC6&usqp=CAU"
            perfil="https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg"
          />
          <Storie
            img="https://www.mountaingoatsoftware.com/uploads/photos/user-stories.png"
            perfil="https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg"
          />
          <Storie
            img="https://i2.wp.com/karolakarlson.com/wp-content/uploads/2020/02/instagram-story-ad-examples.png?resize=360%2C240&ssl=1"
            perfil="https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg"
          />

        </ContainerStories>

        <ContainerNewPost>
          <NewPost />
        </ContainerNewPost>

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

      </ContainerMain>


      <ContainerMessenger>
        <AsideRight />
      </ContainerMessenger>

    </Container>
  )
}

export default Home;