import React from 'react';
import { FaSearch, FaEllipsisH, FaFacebookMessenger } from 'react-icons/fa';
import { Container, ContainerFriend, ContainerMessenger, TitleMessenger } from './style';

const avatar = "https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg";
const sizeIcon = 16;
const sizeMore = 34;
const colorIcon = "#2D88FF";

function Aside() {
  return (
      <Container>

        <ContainerMessenger>

          <TitleMessenger>
            <h3>Contatos</h3>
            <div>
              <FaSearch size={sizeIcon} color={colorIcon} />
              <FaEllipsisH size={sizeIcon} color={colorIcon} />
            </div>
          </TitleMessenger>

          <ul>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>
            <ContainerFriend>
              <img src={avatar} />
              <h3>Avatar Robert</h3>
            </ContainerFriend>

          </ul>

        </ContainerMessenger>

      <button>
        <FaFacebookMessenger size={sizeMore} color={colorIcon} />
      </button>

      </Container>
  )
}

export default Aside;