import styles from "./contactme.module.scss";
export default function ContactMe() {
  return (
    <>
      <h3>Contact me</h3>
      <div className={"component " + styles.contactme}>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.formGroup}>
            <p>Enter your name</p>
            <input
              name="Name"
              className={styles.formInput}
              type="text"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <p>Enter your email</p>
            <input
              name="Email"
              className={styles.formInput}
              required
              type="email"
            />
          </div>
          <div className={styles.formGroup}>
            <p>Your message</p>
            <textarea name="message" className={styles.formInput}></textarea>
          </div>

          <div className={styles.formGroup}>
            <button className={styles.button} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
