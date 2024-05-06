import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectContacts, selectFilters } from "../../redux/selectors";

const ContactList = () => {
  console.log(selectContacts, selectFilters);
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  console.log("contacts", contacts);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  console.log("visibleContacts", visibleContacts);
  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
