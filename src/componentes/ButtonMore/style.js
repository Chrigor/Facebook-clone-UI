import styled from 'styled-components';

export const Container = styled.button`
  display:flex;
  flex-direction:row;

  align-items:center;
  justify-content:center;

  height: 40px;
  width:90%;
  background:#444546;

  padding: 5px 20px;
  margin: 0px 10px;

  border-radius: 10px;

  svg {
    margin-left:10px;
  }

  p {
    color:#B7B9BB;
  }

  &:hover {
    background:#505050;
    cursor:pointer;
  }
`;
