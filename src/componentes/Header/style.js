import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display:flex;
  flex-direction:row;
  width: 100%;
  min-height: 60px;
  border: 1px solid #fff;
  align-items:center;
  justify-content:space-between;
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
    margin-right: 10px;
  }

  input {
    height: 27px;
    width: 200px;

    padding: 4px 8px 4px 12px;
    margin-left: 8px;

    border-radius: 18px;
    border:none;

    color: #9FA1A6;
    font-size:14px;
    background-color:#3A3B3C;
  }
`

export const ContainerNav = styled.nav`
  padding: 5px 8px;

  ul {
    list-style:none;
    display:flex;
    justify-content:space-around;
    width: 450px;
  }

  li {
    margin: 0px 2px;

    a {
      text-decoration:none;
    }
  }
`

export const ContainerPerfil = styled.section`
  display:flex;
  align-items:center;
  justify-content:space-around;

  min-width: 350px;
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
`

export const ContainerIconSubMenu = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  background: #4E4F50;
  color:#E7E9ED;

  height: 40px;
  width: 40px;
  border-radius:20px;
  margin: 3px;
`

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction:row;
  align-items:center;

  min-height: 30px;
  min-width: 70px;
`