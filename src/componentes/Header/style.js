import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display:flex;
  flex-direction:row;
  width: 100%;
  height: 7vh;
  border-bottom: 1px solid #B8BBBF;
  align-items:center;
  justify-content:space-between;
  padding: 0px 5px;

  background:rgba(35,36,37,0.7);
`

export const ContainerLogoAndSearch = styled.section`

  display:flex;
  height: 100%;
  padding: 5px 10px;
  justify-content:center;
  align-items:center;

  img {
    height: 45px;
    width: 45px;
    border-radius: 20px;
    margin-right: 4px;
  }


  div {
    position:relative;

      input {
        height: 48px;
        width: 260px;

        padding: 4px 8px 4px 38px;
        margin-left: 8px;

        border-radius: 24px;
        border:none;

        color: #9FA1A6;
        font-size:14px;
        background-color:#3A3B3C;

        &::placeholder{
          color:#9FA1A6;
          font-size: 16px;
        }
    }

    svg {
      position: absolute;
      top: 15px;
      left: 20px;
    }

  }

`

export const ContainerNav = styled.nav`
  padding: 0;
  max-width: 750px;
  width: 100%;

  ul {
    list-style:none;
    display:flex;
    justify-content:space-around;
    width: 100%;
    padding:0;
  }
  
  li {
      display:flex;
      justify-content:center;

      position: relative;

      margin: 0px 2px;
      padding: 10px 0px;
      border-radius: 10px;

      width: 100%;

    
    
    a {
      text-decoration:none;
    }

    &:hover {
      background:#404040;
    }

    div {
        display:flex;
        justify-content:center;
        align-items:center;

        font-family: sans-serif;

        position: absolute;
        top: 0%;
        right: 30%;

        padding: 10px;
        height:22px;
        width: 25px;
        background: red;
        border-radius: 50%;

        color:white;
        font-weight:bold;
    }
    
  }
`

export const ContainerPerfil = styled.section`
  display:flex;
  align-items:center;
  justify-content:space-around;

  min-width: 200px;
  min-height: 30px;
  padding: 2px 4px;
`

export const ImagePerfil = styled.img`
  width:38px;
  height: 35px;
  border-radius: 16px;
`

export const NamePerfil = styled.p`
  font-size: 16px;
  font-family: sans-serif;
  font-weight:bold;
  color:#fff;
  margin-left: 10px;
`

export const ContainerSubMenu = styled.section`
  display:flex;
  flex-direction:row;

  padding: 2px 5px;
  margin:0px 5px;
`

export const ContainerIconSubMenu = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;

  background: #4E4F50;
  color:#E7E9ED;

  height: 40px;
  width: 40px;
  border-radius:20px;
  margin:3px;

  &:hover{
    background:#707070;
  }
`

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction:row;
  align-items:center;

  min-height: 30px;
  min-width: 70px;
`