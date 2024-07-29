import { Field, Formik, Form } from "formik";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) {
      toast.error("Please, enter a text to search for images.");
      return;
    }
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
