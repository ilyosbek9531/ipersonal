import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Nabvar.module.scss";

export function Navbar() {
  const { t, i18n } = useTranslation("common");
  const langs = [
    {
      label: "ru",
    },
    {
      label: "uz",
    },
    {
      label: "en",
    },
  ];

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.box}>
          <Link to="/">
            <h2>Logo</h2>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">{t("home")}</Link>
              </li>
              <li>
                <Link to="/blog">{t("blog")}</Link>
              </li>
              <li>
                <Link to="/about">{t("about")}</Link>
              </li>
              <li>
                <Link to="/products">products</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.langs}>
            <ul>
              {langs.map((lang) => (
                <li
                  key={lang.label}
                  onClick={() => handleChangeLang(lang.label)}
                  style={{
                    cursor: "pointer",
                    color: i18n.language === lang.label && "red",
                  }}
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
