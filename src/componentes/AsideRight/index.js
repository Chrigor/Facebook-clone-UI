import React from 'react';
import { FaSearch, FaEllipsisH, FaFacebookMessenger } from 'react-icons/fa';
import { Container, ContainerFriend, ContainerMessenger, TitleMessenger } from './style';


const data = [
  {
    nome: "Pedro Robert",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png"
  },
  {
    nome: "Pedro Robert",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png"
  },
  {
    nome: "Pedro Robert",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png"
  },
  {
    nome: "Pedro Robert",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png"
  },
]

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
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/kQ3g3UYcS_k.png"/>
      </button>

      </Container>
  )
}

export default Aside;