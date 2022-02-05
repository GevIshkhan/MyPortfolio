import styles from "./aboutme.module.scss";

export default function Aboutme() {
  return (
    <>
      <h3>Who am I</h3>
      <div className={"component " + styles.aboutme}>
        <div className={styles.profil}>
          <img
            className={styles.profilimg}
            src="/img/profil.jpg"
            alt="Ishkhan Gevorgyan"
          />
        </div>
        <p>
          Hi friend! I'm Ishkhan Gevorgyan. I'm married and I have two sons. I
          graduated from Vanadzor State university. I worked at yerevan "Hyusis"
          company as a web developer. I have more than 5 years of web
          development experience. I think it's a solid background. I can
          describe myself as a highly organized, hard working and responsible
          person. In my spare time I like playing chess, go hiking.
        </p>
      </div>
    </>
  );
}
