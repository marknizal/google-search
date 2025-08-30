import styled from "styled-components";
import { breakpoint } from "../../../styles";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${breakpoint.mobile} {
    color: #ccc;
  }
`;

export const Address = styled.address`
  font-style: normal;
  align-self: flex-start;
  padding: 1rem 2rem;
  font-size: 0.82rem;

  ${breakpoint.mobile} {
    padding: 0.75rem;
  }
`;

export const Nav = styled.nav`
  border-top: 1px solid #555;
  padding: 1rem 2rem;
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  ${breakpoint.mobile} {
    flex-direction: column;
    padding: 1rem 2rem;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.$gap || "2rem"};

  ${breakpoint.mobile} {
    flex-wrap: wrap;
    gap: 0.75rem 2rem;
  }
`;

export const NavLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const MenuItem = styled.a`
  color: #fff !important;
`;

export const darkBtn = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
};

export const darkBg = { backgroundColor: "#1F1F1F" };
