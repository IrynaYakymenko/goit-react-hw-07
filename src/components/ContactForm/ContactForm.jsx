import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    options.resetForm();
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Required!"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone must be in format 123-45-67")
      .required("Phone number is required"),
  });

  return (
    <div>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.lable}>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage className={s.error} name="name" component="p" />
          </label>
          <label className={s.lable}>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage className={s.error} name="number" component="p" />
          </label>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
