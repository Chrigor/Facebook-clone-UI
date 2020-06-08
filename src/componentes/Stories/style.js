import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  margin: 4px;
  padding: 2px;

  max-height: 400px;
  max-width: 200px;


  background-image: url(${props => props.image});
  background-position:center;
  background-size:cover;

  border-radius: 8px;

  p {
    position: absolute;
    font-weight:bold;
    font-size: 16px;
    font-family: sans-serif;
    bottom: 10px;
    width: 100%;
    color:#fff;
  }

  button {
    width: 40px;
    height: 40px;

    border-radius: 50%;

    background-image: url(${props => { 
        return (props.children[0].props.perfil) 
      }
    });

    background-position:center;
    background-size:cover;

    transition: all 0.5s;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.01);
  }
`;
