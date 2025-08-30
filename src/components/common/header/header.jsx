import { PiFlaskFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { Dropdown } from "antd";

import Apps from "../apps";
import Account from "../account";

import Profile from "../../../assets/profile.jpg";
import * as S from "./styles";

const Header = () => {
  const menuItems = [
    { type: "text", content: "Gmail" },
    { type: "text", content: "Images" },
    { type: "icon", content: <PiFlaskFill />, label: "Search Labs" },
    { type: "google-apps", content: <CgMenuGridO />, label: "Google Apps" },
    { type: "google-account", content: Profile, label: "Google Account" },
  ];

  return (
    <S.Wrapper>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} role="button">
            {item.type === "text" && (
              <span className="text">{item.content}</span>
            )}

            {item.type === "icon" && (
              <span aria-label={item.label} title={item.label}>
                {item.content}
              </span>
            )}

            {item.type === "google-apps" && (
              <Dropdown
                popupRender={() => <Apps />}
                trigger={["click"]}
                placement="bottomRight"
              >
                <span aria-label={item.label} title={item.label}>
                  {item.content}
                </span>
              </Dropdown>
            )}

            {item.type === "google-account" && (
              <Dropdown
                popupRender={() => <Account />}
                trigger={["click"]}
                placement="bottomRight"
              >
                <img
                  src={item.content}
                  alt={item.label}
                  title={item.label}
                  loading="lazy"
                  className="profile"
                />
              </Dropdown>
            )}
          </li>
        ))}
      </ul>
    </S.Wrapper>
  );
};

export default Header;
