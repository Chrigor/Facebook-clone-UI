import styled from 'styled-components';

export const Container = styled.aside`
  display:flex;
  flex-direction:column;

  width: 410px;
  padding-bottom:15px;
  background: rgba(37,38,39,1);
`;

export const ContainerList = styled.section`

  ul {
    list-style:none;
    padding:0;
  }

  button {
    align-self: center;
    margin-bottom:16px;
  }


  &:first-child {
    margin: 10px 0px;
  }
`

export const ContainerItem = styled.li`
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
export const ContainerHeader = styled.header`
  display:flex;
  flex-direction:row;
  align-items:center;

  width: 100%;

  padding: 2px 6px;

  h3 {
    font-size: 16px;
    font-family:sans-serif;
    color:#B7B9BB;
  }
  
  img {
    width: 45px;
    height:42px;  
    border-radius: 22px;
    margin-right: 10px;
  }

  &:hover{
    background:#404040;
  }

`

export const ContainerAtalhos = styled.section`

  display:flex;
  flex-direction:column;
  
  ul {
    list-style:none;
    padding:0;
  }
`

export const TitleAtalho = styled.h2`
  color:#929498;
  font-family:sans-serif;
  font-size:24px;
  padding: 10px 0px 0px 10px;
  margin:0;
`