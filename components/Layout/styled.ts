import styled from "@emotion/styled";

export const Header = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Link = styled.p`
  font-weight: 700;
  margin: 0;
  color: rgb(51, 51, 51);
  transition: all 0.1s ease 0s;
  &:hover {
    color: rgb(255, 152, 0);
    cursor: pointer;
  }
`;

export const Logo = styled.h1`
  text-align: center;
  margin: 0;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  font-size: 5.625rem;
`;
