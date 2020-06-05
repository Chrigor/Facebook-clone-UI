import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  justify-content:space-between;

  width:100%;
  height: 90vh;
  padding: 0px 0px;
  background: #333333;
`

export const ContainerPosts = styled.section`
  overflow-x: hidden;
  overflow-y: auto;

  width: 100%;
  height: 90vh;

  max-width: 700px;
`

export const ContainerMessenger = styled.section`
  width: 100%;
  height: 90vh;
  
  min-height: 100%;
  max-width: 350px;

  background: blue;
`