import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Container } from './style';

function ButtonMore() {
  return (
    <Container>
      <p>Ver mais</p>
      <FaArrowDown size={16} color="#333"/>
    </Container>
  );
}

export default ButtonMore;