import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  justify-content:space-between;

  overflow:hidden;

  width:100%;
  height: 92vh;
  padding: 0px 0px;
  background: #333333;


  /* @media(max-width: 1400px) {

    display:flex;
    flex-direction:column;

    width:100%;
    height:auto;
  } */
`

export const ContainerPosts = styled.section`
  overflow-x: hidden;
  overflow-y: scroll;

  width: 100%;
  height: 90vh;

  max-width: 740px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  /* ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  } */
 
  /* Handle */
  /* ::-webkit-scrollbar-thumb {
    background: #888; 
  } */

  /* Handle on hover */
  /* ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  } */
`

export const ContainerMessenger = styled.section`
  display:flex;
  flex-direction:column;

  width: 100%;
  height: 90vh;
  
  min-height: 100%;
  max-width: 350px;
`