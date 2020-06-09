import React from 'react';

import { Container } from './style';

const avatar = "https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg";

function NewPost() {
  return (
    <Container>
        <div className="containerNewPost">
            <img src={avatar} />
            <input type="text" placeholder="No que você esta pensando, Avatar?"/>
        </div>

        <hr />

        <div className="containerSentimentos">
            <div className="newPostItem">
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/XOHfyAiobhT.png" />
              <h4>Video ao vivo</h4>
            </div>

            <div className="newPostItem">
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/6C1aT2Hm3x-.png" />
              <h4>Foto/vídeo</h4>
            </div>

            <div className="newPostItem">
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/I9uaowma2QB.png" />
              <h4>Sentimento/atividade</h4>
            </div>
        </div>
    </Container>
  );
}

export default NewPost;