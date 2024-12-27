import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Big&nbsp;Sale</NavLink>
          <NavLink href="/new">Great&nbsp;New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men&nbsp;Stuff</NavLink>
          <NavLink href="/women">Women&nbsp;Stuff</NavLink>
          <NavLink href="/kids">Kids&nbsp;Stuff</NavLink>
          <NavLink href="/collections">Amazing&nbsp;Collections</NavLink>
        </Nav>
        <MobileNav>
          <Icon id="shopping-bag" strokeWidth={2} />
          <Icon id="search" strokeWidth={2} />
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-y: scroll;

  @media ${QUERIES.tabletAndBelow} {
    border-top: 4px solid var(--color-gray-900);
    align-items: center;
  }

  @media ${QUERIES.phoneAndBelow} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    8vw - 4.5rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndBelow} {
    flex: revert;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    gap: 32px;
    margin-left: auto;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 16px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
