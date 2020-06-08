import styled from 'styled-components';

export const Container = styled.aside`
  display:flex;
  flex-direction:column;  
  position:relative;

  align-self: flex-end;

  width: 320px;
  padding-bottom:15px;
  background: rgba(37,38,39,1);

  button {
    border:none;
    background:#ddd;
    border-radius: 50%;

    position: absolute;
    right:25px;
    bottom: 10px;
    padding: 10px;

    &:hover {
      background: #bbb;
    }

    img {
      color: #fff;
    }
  }
`;


export const ContainerFriend = styled.header`
  display:flex;
  flex-direction:row;
  align-items:center;

  margin-bottom: 12px;
  
  width: 100%;
  height: 50px;
  padding: 20px 14px;
  border-radius: 10px;
  
  h3 {
    font-size: 16px;
    font-family:sans-serif;
    color:#B7B9BB;
  }

  &:hover{
    background:#404040;
    cursor:pointer;
  }

  img {
    width: 48px;
    height: 45px;

    border-radius: 50%;
    margin-right: 12px;
  }

`

export const ContainerMessenger = styled.section`

  display:flex;
  flex-direction:column;
  overflow-y:scroll;

  height:90vh;
  
  ul {
    list-style:none;
    padding:0;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #242425; 
  }
 
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #555; 
  }

  /* Handle on hover */
  /* ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  } */

`

export const TitleMessenger = styled.h2`
  display:flex;
  flex-direction:row;

  height: 40px;

  justify-content:space-between;
  align-items:center;

  color:#929498;
  font-family:sans-serif;
  font-size:24px;

  padding: 10px 0px 0px 10px;
  
  margin:0;

  svg {
    margin-right: 12px;
  }

`

