import { PiFlaskFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";

import Profile from "../../../assets/profile.jpg";
import * as S from "./styles";

const Header = () => {
  const menuItems = [
    { type: "text", content: "Gmail" },
    { type: "text", content: "Images" },
    { type: "icon", content: <PiFlaskFill /> },
    { type: "icon", content: <CgMenuGridO /> },
    { type: "image", content: Profile, alt: "profile" },
  ];

  return (
    <S.Wrapper>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.type === "text" && item.content}
            {item.type === "icon" && item.content}
            {item.type === "image" && (
              <img
                className="profile"
                src={item.content}
                alt={item.alt}
                loading="lazy"
              />
            )}
          </li>
        ))}
      </ul>
    </S.Wrapper>
  );
};

export default Header;
