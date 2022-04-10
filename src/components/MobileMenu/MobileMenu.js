/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import {
  DialogOverlay as BaseDialogOverlay,
  DialogContent as BaseDialogContent,
} from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent aria-label="Mobile Menu">
        <DismissButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        </DismissButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </DialogContent>
    </DialogOverlay>
  );
};

const DialogOverlay = styled(BaseDialogOverlay)`
  isolation: isolate;

  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;

  background-color: hsla(0, 0%, 0%, 80%);

  @media ${({ theme }) => theme.queries.laptopAndUp} {
    display: none;
  }
`;

const DialogContent = styled(BaseDialogContent)`
  height: 100%;
  width: 300px;
  margin-left: auto;

  background-color: var(--color-white);

  display: flex;
  flex-direction: column;

  padding: 32px;

  justify-content: space-between;
`;

const DismissButton = styled(UnstyledButton)`
  align-self: flex-end;

  margin-right: -10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  align-items: flex-start;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: ${18 / 16}rem;
  text-transform: uppercase;

  color: var(--color-gray-900);

  &:hover {
    color: var(--color-secondary);
  }
`;

const Footer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;

  align-items: flex-start;
`;

const FooterLink = styled.a`
  text-decoration: none;

  color: var(--color-gray-700);

  &:hover {
    color: var(--color-secondary);
  }
`;

export default MobileMenu;
