import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectContacts, selectFilters } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  console.log(contacts);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact id={id} name={name} number={number} filters={filters} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
