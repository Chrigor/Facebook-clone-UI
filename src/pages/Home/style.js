import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  justify-content:space-between;

  overflow:hidden;

  width:100%;
  height: 92vh;
  padding: 0px 0px;
  background: rgba(37,38,39,1);


  /* @media(max-width: 1400px) {

    display:flex;
    flex-direction:column;

    width:100%;
    height:auto;
  } */
`

export const ContainerMain = styled.section`
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
  height: 95vh;
  
  min-height: 100%;
  max-width: 350px;
`

export const ContainerStories = styled.section`
  display:flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 270px;

  max-width: 740px;

  margin: 5px 0px 20px 0px;
`
export const ContainerNewPost = styled.section`
  display:flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 150px;

  max-width: 740px;

  margin: 5px 0px 0px 0px;

  padding: 2px;
`
