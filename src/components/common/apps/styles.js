import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  color: white;
  background-color: #1b1b1b;
  border-radius: 2rem;
  border: 7px solid #282a2c;
  padding: 1.75rem;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #282a2c;
  }

  span {
    font-size: 0.85rem;
  }
`;

export const AppIcon = styled.img`
  aspect-ratio: 1 / 1;

  ${({ $isProfile }) =>
    $isProfile
      ? css`
          width: 2.5rem;
          border-radius: 50%;
        `
      : css`
          width: 2.25rem;
        `}
`;
