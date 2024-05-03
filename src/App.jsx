// import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
// import { useContext } from "react";
// import { useSelector } from "react-redux";
// import { selectContacts } from "./redux/selectors";

const App = () => {
  // const [contacts, setContacts] = useState(
  //   // () => JSON.parse(localStorage.getItem("saveContacts")) ?? initContacts
  // );

  // const [filter, setFilter] = useState("");
  // useEffect(() => {
  //   localStorage.setItem("saveContacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (newContact) => {
  //   if (
  //     contacts.find(
  //       (contact) =>
  //         contact.name.toLowerCase() === newContact.name.toLowerCase() ||
  //         contact.number === newContact.number
  //     )
  //   ) {
  //     return alert(
  //       `${newContact.name} or ${newContact.number} is all ready in contacts`
  //     );
  //   }
  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  // };
  // const onDelete = (id) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== id)
  //   );
  // };

  // const onChangeFilter = (value) => {
  //   setFilter(value);
  // };
  // const filteredContacts = () => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // console.log(filteredContacts());
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
