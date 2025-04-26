import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              <Contact id={item.id} name={item.name} number={item.number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
