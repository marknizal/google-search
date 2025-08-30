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

const acc = [
  { id: 1, icon: LuPlus, label: "Add account" },
  { id: 2, icon: LuLogOut, label: "Sign Out" },
];

const search = [
  { id: 1, icon: LuHistory, label: "Search history" },
  { id: 2, icon: LuTrash, label: "Delete last 15 min" },
];

const save = [{ id: 1, icon: LuBookmarkCheck, label: "Save & Collections" }];

const prefs = [
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

const RenderList = ({ items, flex = false }) => (
  <S.List className={flex ? "flex" : ""}>
    {items.map((item) => {
      if (item.subItems) {
        return (
          <li key={item.id} style={{ padding: 0 }}>
            <S.List style={S.merge} className="flex">
              {item.subItems.map((sub) => (
                <li key={sub.id}>
                  <sub.icon /> {sub.label}
                </li>
              ))}
            </S.List>
          </li>
        );
      }
      return (
        <li key={item.id}>
          <item.icon /> {item.label}
        </li>
      );
    })}
  </S.List>
);

const Account = () => (
  <S.Wrapper>
    <span className="mail">marknizal@gmail.com</span>

    <S.Section className="small-gap">
      <S.Avatar>
        <img
          src={Profile}
          alt="Mark John Allen's profile picture"
          loading="lazy"
        />
      </S.Avatar>

      <h1 id="profile-section" className="hello">
        Hi, Mark John Allen!
      </h1>

      <Button className="btn" variant="outlined">
        Manage your Google Account
      </Button>
    </S.Section>

    <S.Section aria-labelledby="account-actions">
      <RenderList items={acc} flex />
    </S.Section>

    <S.Section aria-labelledby="more-from-google">
      <small className="small" style={{ alignSelf: "start" }}>
        More from Google Search
      </small>
      <RenderList items={search} />
      <RenderList items={save} />
      <RenderList items={prefs} />
    </S.Section>

    <small className="small">
      <a href="/privacy">Privacy Policy</a>·
      <a href="/terms">Terms of Service</a>
    </small>
  </S.Wrapper>
);

export default Account;
