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
        <ContainerItem>
          <img src={avatar} />
          <h3>Avatar Nelson</h3>
        </ContainerItem>

        <ul>
          <ContainerItem>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png" />
            <h3>COVID - 19: Central de informações</h3>
          </ContainerItem>

          <ContainerItem>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/kQ3g3UYcS_k.png" />
            <h3>Messenger</h3>
          </ContainerItem>

          <ContainerItem>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" />
            <h3>Páginas</h3>
          </ContainerItem>

          <ContainerItem>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" />
            <h3>Marketplace</h3>
          </ContainerItem>

          <ContainerItem>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" />
            <h3>Vídeos</h3>
          </ContainerItem>

        </ul>

        <ButtonMore />

        <hr/>
        
      </ContainerList>


      <ContainerAtalhos>

        <TitleAtalho>
          Atalhos
        </TitleAtalho>

        <ul>
          <ContainerItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD-qfWO-reNdef-lH4p4ZWq2oDYsYypcSeKNpfOFitiCMPKjpY&usqp=CAU" />
            <h3>La Tour</h3>
          </ContainerItem>

          <ContainerItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThtHTj6lHw8mvLXHohznnW4UIWBGAKY2kANwUfEkHSM0I-U-v2&usqp=CAU" />
            <h3>Lion page</h3>
          </ContainerItem>

          <ContainerItem>
            <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGn7KwlBVMZ0Q/company-logo_200_200/0?e=2159024400&v=beta&t=Jf3JrO_8MG-T8HvwGzNWIuhpVuSdwYq1RZZXSuGwAKg" />
            <h3>Abstract</h3>
          </ContainerItem>

        </ul>
      </ContainerAtalhos>
    </Container>
  )
}

export default Aside;