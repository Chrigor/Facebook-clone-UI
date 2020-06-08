import React from 'react';

import { Container } from './style';

function Stories({ img, perfil }) {
  return (
    <Container image={img}>
      <button perfil={perfil}>
      </button>
      <p>Sua legenda</p>
    </Container>
  );
}

export default Stories;