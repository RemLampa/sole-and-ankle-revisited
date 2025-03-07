import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

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
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon
              id="menu"
              strokeWidth={2}
              onClick={() => setShowMobileMenu(true)}
            />
          </UnstyledButton>
        </MobileNav>
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
  align-items: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  border-top: 4px solid var(--color-gray-900);

  @media ${({ theme }) => theme.queries.laptopAndUp} {
    align-items: baseline;
    border-top: none;

    overflow-y: hidden;
    overflow-x: auto;
  }
`;

const Nav = styled.nav`
  display: none;

  @media ${({ theme }) => theme.queries.laptopAndUp} {
    display: flex;
    gap: clamp(1rem, 6vw + 0.05rem, 15rem);
    margin: 0px 48px;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  gap: 24px;

  @media ${({ theme }) => theme.queries.tabletAndUp} {
    gap: 40px;
  }

  @media ${({ theme }) => theme.queries.laptopAndUp} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
