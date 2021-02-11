import { BiLogOut } from 'react-icons/bi';
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { ImNewspaper as NewsIcon } from 'react-icons/im';
import { MdFavorite as MixIcon } from 'react-icons/md';

import UserImg from '../../../assets/User.png';
import EssenceImg from '../../../assets/essence.png';
import NarguileImg from '../../../assets/narguile.png';

import {
  AsideContainer,
  UserName,
  UserRole,
  Header,
  Menu,
  UserIcon,
  EssenceIcon,
  NarguileIcon,
  MenuLink,
} from './styles';

const menuItemSize = 40;
const menuItemColor = 'white';

function DefaultAside() {
  return (
    <AsideContainer>
      <Header>
        <UserIcon src={UserImg} alt="Icone do usúario" />
        <UserName>João Vitor</UserName>
        <UserRole>Moderador</UserRole>
      </Header>

      <Menu>
        <MenuLink to="/home">
          <HomeIcon color={menuItemColor} size={menuItemSize} />
        </MenuLink>
        <MenuLink to="/essence">
          <EssenceIcon src={EssenceImg} />
        </MenuLink>
        <MenuLink to="/home">
          <MixIcon color={menuItemColor} size={menuItemSize} />
        </MenuLink>
        <MenuLink to="/home">
          <NarguileIcon src={NarguileImg} />
        </MenuLink>
        <MenuLink to="/home">
          <NewsIcon color={menuItemColor} size={menuItemSize} />
        </MenuLink>
      </Menu>

      <BiLogOut color={menuItemColor} size={menuItemSize} />
    </AsideContainer>
  );
}

export default DefaultAside;
