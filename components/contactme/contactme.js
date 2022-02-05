import styles from "./contactme.module.scss";
import { useState, useEffect } from "react";
export default function ContactMe() {
  var [emailAllow, setEmailAllow] = useState(true);
  var [emailStatus, setEmailStatus] = useState("");
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [message, setMessage] = useState("");
  var [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    validated: false,
  });

  useEffect(() => {
    if (errors.validated && emailAllow) {
      setEmailAllow(false);
      fetch("/api/contactme", {
        method: "POST",
        body: JSON.stringify({ name: name, email: email, message: message }),
        headers: {
          "Content-Type": "application-json",
        },
      })
        .then((resp) => resp.json())
        .then((mes) => {
          setEmailStatus(mes.msg);
        });
    }
  }, [errors]);

  function formSubmitHandler(e) {
    e.preventDefault();
    setErrors(validate(name, email, message));
  }
  return (
    <>
      <h3>Contact me</h3>
      <div className={"component " + styles.contactme}>
        <form onSubmit={formSubmitHandler} action="#">
          <div className={styles.formGroup}>
            <p>Enter your name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              className={styles.formInput}
              value={name}
              type="text"
              required
            />
            <p className={styles.errorMessage}>{errors.name}</p>
          </div>
          <div className={styles.formGroup}>
            <p>Enter your email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={styles.formInput}
              value={email}
              required
              type="email"
            />
            <p className={styles.errorMessage}>{errors.email}</p>
          </div>
          <div className={styles.formGroup}>
            <p>Your message</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.formInput}
            ></textarea>
            <p className={styles.errorMessage}>{errors.message}</p>
            <p>{emailStatus}</p>
          </div>
          {emailAllow && (
            <div className={styles.formGroup}>
              <button className={styles.button} type="submit">
                Send
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

function validate(name, email, message) {
  let errors = { name: "", email: "", message: "", validated: true };
  if (name == "") {
    errors.name = "The name is required";
    errors.validated = false;
  }
  if (email == "") {
    errors.email = "The email is required";
    errors.validated = false;
  }
  if (message == "") {
    errors.message = "The message is required";
    errors.validated = false;
  }
  return errors;
}
