import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.container}>
        <div className={s.date}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={s.date}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>

      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};

export default Contact;
