import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <>
      <h3>Technologies I use</h3>
      <div className={"component " + styles.skills}>
        <div className={styles.skill}>
          <i className="fab fa-js"></i> Java Script
        </div>
        <div className={styles.skill}>
          <i className="fab fa-css3-alt"></i> CSS/SASS
          <i className="fab fa-sass"></i>
        </div>
        <div className={styles.skill}>
          <i className="fab fa-html5"></i> HTML
        </div>
        <div className={styles.skill}>
          <i className="fab fa-react"></i> React/Next.js
        </div>
        <div className={styles.skill}>Three.Js</div>
        <div className={styles.skill}>
          <i className="fab fa-bootstrap"></i> Bootstrap
        </div>
        <div className={styles.skill}> GraphQl</div>
        <div className={styles.skill}>
          <i className="fab fa-node"></i> Node.js/Express
        </div>
        <div className={styles.skill}>MongoDb</div>
        <div className={styles.skill}>
          <i className="fab fa-laravel"></i> Laravel
        </div>
        <div className={styles.skill}>
          <i className="fab fa-php"></i> PHP
        </div>
        <div className={styles.skill}>MySql</div>
      </div>
    </>
  );
}
