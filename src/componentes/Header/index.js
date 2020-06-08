import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContainerHeader, ContainerLogoAndSearch, ContainerNav, ContainerPerfil, ImagePerfil, NamePerfil, ContainerSubMenu, ContainerIconSubMenu, ContainerInfo } from './style';
import { FaSearch, FaHome, FaPlay, FaStore, FaUserFriends, FaGamepad, FaFacebookMessenger, FaPlus, FaBell, FaAngleDown } from 'react-icons/fa';

function Header() {

  const sizeIcon = 32;
  const colorIcon = "#B8BBBF";
  const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png";
  const avatar = "https://jovemnerd.com.br/wp-content/uploads/avatar_29.jpg";

  const sizeSubIcon = 22;

  const colorActive = "red";

  const [videos, setVideos] = useState(10);
  const [comercio, setComercio] = useState(0);
  const [peoples, setPeoples] = useState(2);
  const [games, setGames] = useState(5);

  const [messenger, setMessenger] = useState(5);
  const [notifications, setNotifications] = useState(5);

  const [pathActive, setPathactive] = useState("/");



  useEffect(handleClickPath, [pathActive]);


  function handleClickPath() {
    const path = window.location.pathname;
    setPathactive(path.toString());
    console.log(pathActive);
  }


  return (
    <ContainerHeader>
      <ContainerLogoAndSearch>
        <img src={url} />
        <div>
          <FaSearch color="#9FA1A6" size={18} />
          <input type="text" name="search" id="search" placeholder="Pesquisar no Facebook " />
        </div>
      </ContainerLogoAndSearch>

      <ContainerNav>
        <ul>
          <li onClick={() => handleClickPath()}>
            <Link to="/">
              <FaHome size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
          <li onClick={() => handleClickPath()}>
            {videos != 0 &&
              (<div>
                {videos}
              </div>)
            }
            <Link to="/about">
              <FaPlay size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
          <li onClick={() => handleClickPath()}>
            {comercio != 0 &&
              (<div>
                {comercio}
              </div>)
            }

            <Link to="/users">
              <FaStore size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
          <li onClick={() => handleClickPath()}>
            {peoples != 0 &&
              (<div>
                {peoples}
              </div>)
            }

            <Link to="/friends">
              <FaUserFriends size={sizeIcon} color={colorIcon} />
            </Link>
          </li>
          <li onClick={() => handleClickPath()}>
            {games != 0 &&
              (<div>
                {games}
              </div>)
            }

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

          <ContainerIconSubMenu onClick={() => alert('Icon')}>
            <FaPlus size={sizeSubIcon} />
          </ContainerIconSubMenu>

          <ContainerIconSubMenu onClick={() => alert('Icon')}>
          {messenger != 0 &&
              (<div>
                {messenger}
              </div>)
            }
            <FaFacebookMessenger size={sizeSubIcon} />
          </ContainerIconSubMenu>

          <ContainerIconSubMenu onClick={() => alert('Icon')}>
          {notifications != 0 &&
              (<div>
                {notifications}
              </div>)
            }
            <FaBell size={sizeSubIcon} />
          </ContainerIconSubMenu>

          <ContainerIconSubMenu onClick={() => alert('Icon')}>
            <FaAngleDown size={sizeSubIcon} />
          </ContainerIconSubMenu>

        </ContainerSubMenu>

      </ContainerPerfil>
    </ContainerHeader>
  )
}

export default Header;