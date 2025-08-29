import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .bottom {
    padding: 1rem 2rem;
    font-size: 0.82rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  nav a {
    color: inherit;
    text-decoration: none;
  }

  nav a:hover,
  nav a:focus {
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
