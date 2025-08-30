import styled from "styled-components";

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

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  .mail {
    font-size: 0.9rem;
  }

  .hello {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .btn {
    border-radius: 2rem;
    padding: 1.15rem;
    background: transparent;
    color: #a8c7fa;

    &:hover {
      background: #33373c !important;
      color: #a8c7fa !important;
    }
  }

  .small {
    display: flex;
    gap: 0.75rem;
    font-size: 0.8rem;
    color: #ccc;

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  &.small-gap {
    gap: 0.5rem;
  }
`;

export const Avatar = styled.div`
  width: 5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: block;
  background: #212121;
  border-radius: 2rem;
  width: 100%;
  overflow: hidden;

  &.flex {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  li {
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
  }
`;

export const merge = { borderRadius: 0 };
