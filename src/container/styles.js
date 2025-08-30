import styled from "styled-components";
import { breakpoint } from "../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex: 1;

  ${breakpoint.mobile} {
    gap: 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  font-family: "Poppins", Courier;

  ${breakpoint.mobile} {
    font-size: 3rem;
  }
`;

export const Search = styled.form`
  width: 36rem;
  background-color: #4d5157;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0 1.25rem;
  transition: background-color 0.2s ease;

  svg {
    flex-shrink: 0;
    color: #ccc;
    font-size: 1.25rem;
  }

  &:hover {
    background-color: #666;
  }

  &:focus-within {
    background-color: #303134;
  }

  ${breakpoint.mobile} {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 1rem 0;
  background-color: transparent;
  border: none;
  width: 100%;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  svg {
    pointer-events: none;
    flex-shrink: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1rem;
  margin-top: 0.5rem;

  &.actions {
    ${breakpoint.mobile} {
      display: none;
    }
  }
`;

export const Button = styled.button`
  background-color: #303134;
  color: #fff;
  padding: 0.65rem 1rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const Small = styled.p`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #bfbfbf;

  a {
    color: #9ac3ff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
