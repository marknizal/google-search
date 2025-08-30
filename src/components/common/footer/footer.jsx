import * as S from "./styles";
import { Dropdown, Switch } from "antd";

const leftLinks = [
  { label: "About", href: "/about" },
  { label: "Advertising", href: "/advertising" },
  { label: "Business", href: "/business" },
  { label: "How Search works", href: "/how-search-works" },
];

const rightLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const settingsItems = [
  {
    key: "1",
    label: <S.MenuItem href="/search-settings">Search settings</S.MenuItem>,
  },
  {
    key: "2",
    label: <S.MenuItem href="/advanced-search">Advanced search</S.MenuItem>,
  },
  {
    key: "3",
    label: <S.MenuItem href="/your-data">Your data in Search</S.MenuItem>,
  },
  { key: "4", label: <S.MenuItem href="/history">Search history</S.MenuItem> },
  { key: "5", label: <S.MenuItem href="/help">Search help</S.MenuItem> },
  { key: "6", label: <S.MenuItem href="/feedback">Send feedback</S.MenuItem> },
  {
    key: "7",
    label: (
      <div style={S.darkBtn}>
        <span>Dark theme</span>
        <Switch size="small" defaultChecked />
      </div>
    ),
  },
];

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Address>Philippines</S.Address>

      <S.Nav aria-label="Footer links">
        <S.NavList $gap="2rem">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <S.NavLink href={link.href}>{link.label}</S.NavLink>
            </li>
          ))}
        </S.NavList>

        <S.NavList>
          {rightLinks.map((link) => (
            <li key={link.href}>
              <S.NavLink href={link.href}>{link.label}</S.NavLink>
            </li>
          ))}

          <li>
            <Dropdown
              menu={{ items: settingsItems, style: S.darkBg }}
              placement="topRight"
              trigger={["click"]}
            >
              <S.NavLink href="#" onClick={(e) => e.preventDefault()}>
                Settings
              </S.NavLink>
            </Dropdown>
          </li>
        </S.NavList>
      </S.Nav>
    </S.Wrapper>
  );
};

export default Footer;
