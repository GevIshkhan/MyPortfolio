import styles from "./aboutme.module.scss";

export default function Aboutme() {
  return (
    <>
      <h3>Who am I</h3>
      <div className={"component " + styles.aboutme}>
        <div className={styles.profil}>
          <img className={styles.profilimg} src="/img/profil.jpg" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          autem atque maxime, nesciunt fuga, amet quas enim quasi laudantium
          aliquam natus dolores quibusdam odit. Soluta reprehenderit sapiente
          ipsum consequuntur adipisci! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam dolor, natus corrupti ut quod molestiae
          repellendus a pariatur quo quae! Dolores sapiente minima ratione ad
          ducimus unde eum excepturi ea?
        </p>
      </div>
    </>
  );
}
