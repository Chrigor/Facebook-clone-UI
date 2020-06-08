import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Container } from './style';

function ButtonMore() {
  return (
    <Container>
      <p>Ver mais</p>
      <FaAngleDown size={16} color="#ddd"/>
    </Container>
  );
}

export default ButtonMore;