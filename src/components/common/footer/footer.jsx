import * as S from "./styles";

const leftLinks = [
  { label: "About", href: "/about" },
  { label: "Advertising", href: "/advertising" },
  { label: "Business", href: "/business" },
  { label: "How Search works", href: "/how-search-works" },
];

const rightLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Settings", href: "/settings" },
];

const Footer = () => {
  return (
    <S.Wrapper>
      <address className="bottom">Philippines</address>
      <nav
        aria-label="Footer links"
        className="bottom"
        style={{ borderTop: "1px solid #555" }}
      >
        <ul>
          {leftLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <ul>
          {rightLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </S.Wrapper>
  );
};

export default Footer;
