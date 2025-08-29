import styled from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 1rem;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.25rem;

    li {
      font-size: 0.85rem;
      cursor: pointer;

      svg {
        font-size: 1.5rem;
        flex-shrink: 0;
      }
    }
  }

  .profile {
    aspect-ratio: 1 / 1;
    width: 2.15rem;
    border-radius: 50%;
  }
`;
