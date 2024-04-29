import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const initContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("saveContacts")) ?? initContacts
  );

  const [filter, setFilter] = useState("");
  useEffect(() => {
    localStorage.setItem("saveContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return alert(
        `${newContact.name} or ${newContact.number} is all ready in contacts`
      );
    }
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const onDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const onChangeFilter = (value) => {
    setFilter(value);
  };
  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // console.log(filteredContacts());
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList contacts={filteredContacts()} onDelete={onDelete} />
    </div>
  );
};

export default App;
