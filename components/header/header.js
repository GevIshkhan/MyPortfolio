import styles from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <div className={styles.portfolioBox}>
            <div className={styles.logo}>
              <span className={styles.dark}>P</span>
              <span className={styles.light}>O</span>
              <span className={styles.lighter}>R</span>
              <span className={styles.dark}>T</span>
              <span className={styles.light}>F</span>
              <span className={styles.lighter}>O</span>
              <span className={styles.dark}>L</span>
              <span className={styles.light}>I</span>
              <span className={styles.lighter}>O </span>
              <i
                className={
                  "far fa-keyboard " + styles.lighter + " " + styles.keyboard
                }
              ></i>
            </div>
            <div>
              <span className={styles.authorName}>Ishkhan Gevorgyan</span>
            </div>
          </div>
          {/* <ul>
            <a href="#/contact">
              <li>CONTACT</li>
            </a>
          </ul> */}
        </nav>
      </header>
    </>
  );
}
