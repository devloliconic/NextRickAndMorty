import React, { Component } from "react";
import { Header, Navbar, Link, Logo } from "./styled";

import { Content, ContentWrapper } from "../styled";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <ContentWrapper>
        <Header>
          <Navbar>
            <Link></Link>
            <Link>Docs</Link>
            <Link>About</Link>
            <Link>Support Us</Link>
          </Navbar>
        </Header>
        <Logo>The Rick and Morty</Logo>
        <Logo>API</Logo>
      </ContentWrapper>
      <Content>{children}</Content>
    </>
  );
};
