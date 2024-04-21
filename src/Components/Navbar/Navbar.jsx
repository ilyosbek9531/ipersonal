import { Box, Container, IconButton, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Nabvar.module.scss";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch } from "react-redux";
import { themeActions } from "redux/theme/theme.slice";

export function Navbar() {
  const { t, i18n } = useTranslation("common");
  const dispatch = useDispatch();
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

  const theme = useTheme();

  return (
    <header className={styles.header}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(themeActions.colorMode())}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
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
