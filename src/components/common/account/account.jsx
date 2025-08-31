import Profile from "../../../assets/profile.jpg";

import { Button } from "antd";
import * as S from "./styles";

import {
  LuHistory,
  LuTrash,
  LuSearch,
  LuBookmarkCheck,
  LuSettings,
  LuGlobe,
  LuShield,
  LuPlus,
  LuLogOut,
  LuCircleHelp,
} from "react-icons/lu";

const account = [
  { id: 1, icon: LuPlus, label: "Add account" },
  { id: 2, icon: LuLogOut, label: "Sign Out" },
];

const search = [
  { id: 1, icon: LuHistory, label: "Search history" },
  { id: 2, icon: LuTrash, label: "Delete last 15 min" },
];

const saved = [{ id: 1, icon: LuBookmarkCheck, label: "Save & Collections" }];

const preferences = [
  { id: 1, icon: LuSearch, label: "Search personalization" },
  { id: 2, icon: LuShield, label: "SafeSearch" },
  { id: 3, icon: LuGlobe, label: "Language" },
  {
    id: 4,
    subItems: [
      { id: "sub1", icon: LuSettings, label: "More settings" },
      { id: "sub2", icon: LuCircleHelp, label: "Help" },
    ],
  },
];

const RenderList = ({ items, grid = false, flat = false }) => (
  <S.List $grid={grid} $flat={flat}>
    {items.map((item) =>
      item.subItems ? (
        <S.Item key={item.id} $grid={grid} $flat={flat} style={{ padding: 0 }}>
          <S.List $grid $flat>
            {item.subItems.map((sub) => (
              <S.Item key={sub.id} $grid $flat>
                <sub.icon /> {sub.label}
              </S.Item>
            ))}
          </S.List>
        </S.Item>
      ) : (
        <S.Item key={item.id} $grid={grid} $flat={flat}>
          <item.icon /> {item.label}
        </S.Item>
      )
    )}
  </S.List>
);

const Account = () => (
  <S.Wrapper>
    <S.Email>marknizal@gmail.com</S.Email>

    <S.Section $compact>
      <S.Avatar>
        <img
          src={Profile}
          alt="Mark John Allen's profile picture"
          loading="lazy"
        />
      </S.Avatar>

      <S.Hello>Hi, Mark John Allen!</S.Hello>

      <S.Button as={Button} className="btn">
        Manage your Google Account
      </S.Button>
    </S.Section>

    <S.Section aria-labelledby="account-actions">
      <RenderList items={account} grid />
    </S.Section>

    <S.Section aria-labelledby="more-from-google">
      <small style={{ alignSelf: "start", fontSize: "0.8rem", color: "#ccc" }}>
        More from Google Search
      </small>
      <RenderList items={search} />
      <RenderList items={saved} />
      <RenderList items={preferences} />
    </S.Section>

    <S.Footer>
      <a href="/privacy">Privacy Policy</a>·
      <a href="/terms">Terms of Service</a>
    </S.Footer>
  </S.Wrapper>
);

export default Account;
