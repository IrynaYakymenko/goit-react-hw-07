import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectFilteredContact } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContact);

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
