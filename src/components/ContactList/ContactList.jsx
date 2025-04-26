import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {isLoading && <h2>Loading ....</h2>}
      {isError && <h2>&{isError}</h2>}
    </div>
  );
};

export default ContactList;
