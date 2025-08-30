import { PiFlaskFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";

import { Dropdown } from "antd";
import Apps from "../apps";

import Profile from "../../../assets/profile.jpg";
import * as S from "./styles";

const Header = () => {
  const menuItems = [
    { type: "text", content: "Gmail" },
    { type: "text", content: "Images" },
    { type: "icon", content: <PiFlaskFill />, label: "Search Labs" },
    { type: "dropdown", content: <CgMenuGridO />, label: "Google Apps" },
    { type: "image", content: Profile, label: "Google Account" },
  ];

  return (
    <S.Wrapper>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.type === "text" && (
              <span className="text">{item.content}</span>
            )}

            {item.type === "icon" && (
              <span role="button" aria-label={item.label} title={item.label}>
                {item.content}
              </span>
            )}

            {item.type === "dropdown" && (
              <Dropdown
                popupRender={() => <Apps />}
                trigger={["click"]}
                placement="bottomRight"
              >
                <span role="button" aria-label={item.label} title={item.label}>
                  {item.content}
                </span>
              </Dropdown>
            )}

            {item.type === "image" && (
              <img
                src={item.content}
                alt={item.label}
                title={item.label}
                loading="lazy"
                className="profile"
              />
            )}
          </li>
        ))}
      </ul>
    </S.Wrapper>
  );
};

export default Header;
