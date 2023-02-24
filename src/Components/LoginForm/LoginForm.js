import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as yup from "yup";

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(10).required(),
});

const initialValues = {
  login: "1",
  password: "2",
};

const Input = styled(Field)`
  color: red;
`;

const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Login <Input type="text" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

// const LoginForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { login, password } = e.target.elements;
//     console.log(login.value, password.value);
//   };
//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         Login <input type="text" name="login"></input>
//       </label>
//       <label htmlFor="password">
//         Login <input type="text" name="password"></input>
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LoginForm;