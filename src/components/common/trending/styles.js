import styled from "styled-components";
import { breakpoint } from "../../../styles";

export const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;

  .title {
    font-size: 1.15rem;
    font-weight: 400;
  }

  ${breakpoint.mobile} {
    display: flex;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: block;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.9rem;
  border-bottom: 1px solid #555;

  * {
    font-size: 0.95rem;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const SearchInfo = styled.div`
  display: block;

  small {
    font-size: 0.8rem;
    color: #ccc;
  }
`;

export const Thumbnail = styled.img`
  width: 2.5rem;
  aspect-ratio: 1/1;
  border-radius: 0.4rem;
  margin-left: auto;
`;
