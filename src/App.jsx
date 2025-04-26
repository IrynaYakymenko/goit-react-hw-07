import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { selectIsError, selectIsLoading } from "./redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
// import contacts from "./contacts.json";
// import { useEffect, useState } from "react";

// function App() {
//   const [cards, setCards] = useState(() => {
//     const savedCards = JSON.parse(localStorage.getItem("users-card"));

//     if (savedCards && savedCards.length > 0) {
//       return savedCards;
//     }

//     const initialCards = contacts.map((item) => ({
//       ...item,
//       id: crypto.randomUUID(),
//     }));

//     localStorage.setItem("users-card", JSON.stringify(initialCards));
//     return initialCards;
//   });

//   const [searchValue, setSearchValue] = useState("");

//   const handleAddCards = (card) => {
//     const newCard = { ...card, id: crypto.randomUUID() };
//     setCards([...cards, newCard]);
//   };

//   const handleDeleteCards = (id) => {
//     setCards(cards.filter((item) => item.id !== id));
//   };

//   const handleSearch = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const filterCards = cards.filter((item) =>
//     item.name.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   useEffect(() => {
//     localStorage.setItem("users-card", JSON.stringify(cards));
//   }, [cards]);

//   return (
//     <>
//       <h2>Phonebook</h2>
//       <ContactForm handleAddCards={handleAddCards} />
//       <SearchBox handleSearch={handleSearch} />
//       <ContactList
//         contacts={filterCards}
//         handleDeleteCards={handleDeleteCards}
//       />
//     </>
//   );
// }

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
