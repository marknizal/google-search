import { LuTrendingUp } from "react-icons/lu";
import { Fade } from "react-awesome-reveal";

import { TRENDING_SEARCHES } from "./data";

import * as S from "./styles";

const TrendingSearch = () => (
  <S.Wrapper>
    <h1 className="title">Trending Searches</h1>

    <S.List>
      <Fade cascade damping={0.1} triggerOnce>
        {TRENDING_SEARCHES.map((item, index) => (
          <S.Item key={index}>
            <LuTrendingUp />

            <S.SearchInfo>
              <p>{item.title}</p>
              {item.subtitle && <small>{item.subtitle}</small>}
            </S.SearchInfo>

            {item.thumbnail && (
              <S.Thumbnail src={item.thumbnail} alt={item.title} />
            )}
          </S.Item>
        ))}
      </Fade>
    </S.List>
  </S.Wrapper>
);

export default TrendingSearch;
