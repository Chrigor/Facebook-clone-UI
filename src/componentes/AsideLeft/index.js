import React from 'react';
import { FaFacebookMessenger, FaPager, FaAppStore, FaVideo, FaPlus } from 'react-icons/fa';
import { Container, ContainerItem, ContainerHeader, ContainerList, ContainerAtalhos, TitleAtalho } from './style';
import ButtonMore from '../ButtonMore';
const avatar = "https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg";
const sizeIcon = 32;
const colorIcon = "#2D88FF";

function Aside() {
  return (
    <Container>
      <ContainerList>
        <ContainerHeader>
          <img src={avatar} />
          <h3>Avatar Robert</h3>
        </ContainerHeader>

        <ul>
          <ContainerItem>
            <FaFacebookMessenger size={sizeIcon} color={colorIcon} />
            <h3>Messenger</h3>
          </ContainerItem>

          <ContainerItem>
            <FaPager size={sizeIcon} color={colorIcon} />
            <h3>Páginas</h3>
          </ContainerItem>

          <ContainerItem>
            <FaAppStore size={sizeIcon} color={colorIcon} />
            <h3>MarketPlace</h3>
          </ContainerItem>

          <ContainerItem>
            <FaVideo size={sizeIcon} color={colorIcon} />
            <h3>Videos</h3>
          </ContainerItem>

          <ContainerItem>
            <FaPlus size={sizeIcon} color={colorIcon} />
            <h3>Mais</h3>
          </ContainerItem>

        </ul>

        <ButtonMore />
      </ContainerList>


      <ContainerAtalhos>

        <TitleAtalho>
          Atalhos
        </TitleAtalho>

        <ul>
          <ContainerItem>
            <FaFacebookMessenger size={sizeIcon} color={colorIcon} />
            <h3>Messenger</h3>
          </ContainerItem>

          <ContainerItem>
            <FaPager size={sizeIcon} color={colorIcon} />
            <h3>Páginas</h3>
          </ContainerItem>

          <ContainerItem>
            <FaAppStore size={sizeIcon} color={colorIcon} />
            <h3>MarketPlace</h3>
          </ContainerItem>

          <ContainerItem>
            <FaVideo size={sizeIcon} color={colorIcon} />
            <h3>Videos</h3>
          </ContainerItem>

          <ContainerItem>
            <FaPlus size={sizeIcon} color={colorIcon} />
            <h3>Mais</h3>
          </ContainerItem>

        </ul>
      </ContainerAtalhos>

    </Container>
  )
}

export default Aside;