import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { selectIsError, selectIsLoading } from "./redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <h2>Loading ....</h2>}
      {isError && <h2>Error</h2>}
    </>
  );
}

export default App;
