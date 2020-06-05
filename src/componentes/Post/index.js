import React, {useState} from 'react';

import { Container, ContainerHeader, ContainerPost, ContainerAction, ButtonAction } from './style';
import { FaCcPaypal, FaArrowRight, FaAllergies } from 'react-icons/fa';

const sizeIcon = 18;

function Post({ nome, urlFoto, urlPost, descricao }) {

  const [colorLike, setColorLike] = useState("#ccc");
  const [colorComment, setColorComment] = useState("#ccc");

  function handleClickLike(){
    const color = colorLike == "#ccc" ? "#4080FF": "#ccc";
    setColorLike(color);
  }

  function handleClickComment(){
    const color = colorComment == "#ccc" ? "#4080FF": "#ccc";
    setColorComment(color);
  }

  return (
    <Container>
      <ContainerHeader>
        <div>
          <img src={urlFoto} alt="foto perfil" />
        </div>
        <div>
          <h3>{nome}</h3>
        </div>
      </ContainerHeader>

      <ContainerPost>
        <p>{descricao}</p>
        <img src={urlPost} alt="image post" />
      </ContainerPost>

      <ContainerAction>
        <ButtonAction onClick={() => handleClickLike()} color={colorLike}>
            <FaCcPaypal size={sizeIcon} color={colorLike} />
            <span>Like</span>
        </ButtonAction>

        <ButtonAction onClick={() => handleClickComment()} color={colorComment}>
            <FaAllergies size={sizeIcon} color={colorComment} />
            <span>Comentar</span>
        </ButtonAction>

        <ButtonAction onClick={() => handleClickComment()} color={colorComment}>
            <FaArrowRight size={sizeIcon} color={colorComment} />
            <span>Compartilhar</span>
        </ButtonAction>

      </ContainerAction>
    </Container>
  );
}

export default Post;
