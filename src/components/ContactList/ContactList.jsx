import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filters/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredContacts?.map((item) => {
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
