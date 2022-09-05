import "./style.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser } from "../../apis";
import { successful } from "../../services/toastify";
import { unsuccess } from "../../services/toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setData } from "../../services/storge";

const LoginForm = () => {
  const Navigate = useNavigate();
  const gotoHome = (val) => {
    Navigate("/");
    setData("User", val);
  };

  return (
    <div className="form_containar">
      <h2>Login Please</h2>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length <= 5) {
            errors.password = "minimum length 5";
          } else if (values.password.length >= 15) {
            errors.password = "maximun length 15";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          let res = loginUser(values);
          if (!res.status.error) {
            successful(res.status.message);
            gotoHome(res.data);
          } else {
            unsuccess(res.status.message);
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>
                Email <br />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="p" />
              </label>
            </div>
            <div>
              <label>
                Password <br />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="p" />
              </label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <Link to="/signup">Please click here to Signup</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
