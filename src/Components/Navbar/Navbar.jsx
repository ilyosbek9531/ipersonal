import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">
            <h2>Logo</h2>
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to="/"
                  state={{ name: "ilyosbek" }}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to="/blog"
                >
                  {t("blog")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to="/about"
                >
                  {t("about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to="/products"
                >
                  products
                </NavLink>
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
