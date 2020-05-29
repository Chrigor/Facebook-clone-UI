import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerHeader, ContainerLogoAndSearch, ContainerNav, ContainerPerfil, ImagePerfil, NamePerfil, ContainerSubMenu, ContainerIconSubMenu, ContainerInfo } from './style';
import { FaSearch, FaHome, FaPlay, FaStore, FaUserFriends, FaGamepad, FaFacebookMessenger, FaPlus, FaBell, FaRegArrowAltCircleDown } from 'react-icons/fa';

function Header() {

  const sizeIcon = 28;
  const colorIcon = "#B8BBBF";
  const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png";
  const avatar = "https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg";

  const sizeSubIcon = 18;

  return (
    <ContainerHeader>
      <ContainerLogoAndSearch>
        <img src={url} />
        <FaSearch color="#9FA1A6" />
        <input type="text" name="search" id="search" placeholder="Pesquisar no Facebook " />
      </ContainerLogoAndSearch>

      <ContainerNav>
        <ul>
          <li>
            <Link to="/">
              <FaHome size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaPlay size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
          <li>
            <Link to="/users">
              <FaStore size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
          <li>
            <Link to="/friends">
              <FaUserFriends size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
          <li>
            <Link to="/games">
              <FaGamepad size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
        </ul>
      </ContainerNav>

      <ContainerPerfil>
        <ContainerInfo>
          <ImagePerfil src={avatar} />
          <NamePerfil>
            Avatar
        </NamePerfil>
        </ContainerInfo>

        <ContainerSubMenu>

          <ContainerIconSubMenu>
            <FaPlus size={sizeSubIcon} />
          </ContainerIconSubMenu>

          <ContainerIconSubMenu>
            <FaFacebookMessenger size={sizeSubIcon} />
          </ContainerIconSubMenu>

          <ContainerIconSubMenu>
            <FaBell size={sizeSubIcon} />
          </ContainerIconSubMenu>

          <ContainerIconSubMenu>
            <FaRegArrowAltCircleDown size={sizeSubIcon} />
          </ContainerIconSubMenu>

        </ContainerSubMenu>

      </ContainerPerfil>
    </ContainerHeader>
  )
}

export default Header;