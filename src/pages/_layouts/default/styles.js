import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AsideContainer = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px 20px 10px;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  background-color: white;
  flex: 1;
  margin: 10px 10px 10px 0;
  border-radius: 10px;
  padding: 10px;
`;

const UserName = styled.p`
  color: white;
  font-weight: 500;
`;

const UserRole = styled.p`
  color: white;
  font-weight: 300;
`;

const UserIcon = styled.img`
  width: 50px;
  margin-bottom: 3px;
`;
const EssenceIcon = styled.img`
  width: 33px;
`;
const NarguileIcon = styled.img`
  width: 40px;
`;

const Menu = styled.menu`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  .active {
    opacity: 0.8;
    transition: opacity 0.2;
  }
`;

const Header = styled.header`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuLink = styled(NavLink)`
  padding: 15px 0 15px 0;
`;

export {
  AsideContainer,
  Container,
  UserName,
  UserRole,
  Menu,
  Header,
  Main,
  UserIcon,
  EssenceIcon,
  NarguileIcon,
  MenuLink,
};
