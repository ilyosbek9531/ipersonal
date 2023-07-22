import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.box}>
          <Link to="/">
            <h2>Logo</h2>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
