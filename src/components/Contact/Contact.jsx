import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>
        <FaUser /> {name}
      </p>
      <p className={css.text}>
        <FaPhone /> {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
