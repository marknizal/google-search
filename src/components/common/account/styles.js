import styled from "styled-components";
import { breakpoint } from "../../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: #282a2c;
  color: #fff;
  border-radius: 2rem;
  padding: 1rem;
  min-width: 25rem;
  max-height: 85dvh;
  overflow: auto;

  ${breakpoint.mobile} {
    min-width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Avatar = styled.div`
  width: 5rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => (props.$compact ? "0.5rem" : "1rem")};
  width: 100%;
`;

export const Email = styled.span`
  font-size: 0.9rem;
  color: #ddd;
`;

export const Hello = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
`;

export const Button = styled.button`
  border-radius: 2rem;
  padding: 1.15rem;
  background: transparent;
  color: #a8c7fa;
  border: 1px solid #a8c7fa;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #33373c !important;
    color: #a8c7fa !important;
  }
`;

export const List = styled.ul`
  list-style: none;
  background: #212121;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: ${(props) => (props.$grid ? "grid" : "block")};
  grid-template-columns: ${(props) =>
    props.$grid ? "repeat(2, 1fr)" : "none"};
  border-radius: ${(props) => (props.$flat ? "0" : "2rem")};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.15rem;
  border-bottom: 1px solid #555;
  font-size: 0.9rem;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    background: #37393b;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Footer = styled.small`
  display: flex;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: #ccc;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
