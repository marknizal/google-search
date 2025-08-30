import { LuSearch } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";

import TrendingSearch from "../components/common/trending";
import * as S from "./styles";

const Google = () => {
  return (
    <S.Wrapper>
      <S.Logo>Google</S.Logo>

      <S.Search role="search">
        <S.Icon type="submit" aria-label="Search">
          <LuSearch aria-hidden="true" />
        </S.Icon>

        <S.Input
          name="search"
          type="search"
          aria-label="Search Google"
          title="Search"
        />

        <S.Icon type="button" aria-label="Voice Search" title="Search by voice">
          <FaMicrophone aria-hidden="true" />
        </S.Icon>

        <S.Icon type="button" aria-label="Image Search" title="Search by image">
          <SiGooglelens aria-hidden="true" />
        </S.Icon>
      </S.Search>

      <S.Box className="actions">
        <S.Button type="submit">Google Search</S.Button>
        <S.Button
          type="button"
          onClick={() => (window.location.href = "https://doodles.google/")}
        >
          I'm Feeling Lucky
        </S.Button>
      </S.Box>

      <S.Small>
        Google offered in: <a href="/setlang?lang=fil">Filipino</a>{" "}
        <a href="/setlang?lang=ceb">Cebuano</a>
      </S.Small>

      <TrendingSearch />
    </S.Wrapper>
  );
};

export default Google;
