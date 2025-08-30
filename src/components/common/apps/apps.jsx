import * as S from "./styles";
import { appList } from "./data";

const Apps = () => (
  <S.Wrapper>
    {appList.map(({ img, label, isProfile }, index) => (
      <S.Item key={index}>
        <S.AppIcon src={img} alt={label} $isProfile={isProfile} />
        <span>{label}</span>
      </S.Item>
    ))}
  </S.Wrapper>
);

export default Apps;
