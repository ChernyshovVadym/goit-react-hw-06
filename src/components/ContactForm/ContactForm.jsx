import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "too short")
    .max(50, "too long")
    .required("required"),
  number: Yup.string()
    .trim()
    .min(3, "too short")
    .max(50, "too long")
    .required("required"),
});
const initionValus = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    addContact(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initionValus}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.field}
          id={nameFieldId}
          name="name"
          placeholder="Jane"
          type="text"
        />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={css.field}
          id={numberFieldId}
          name="number"
          placeholder="380678377445"
          type="text"
        />

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
