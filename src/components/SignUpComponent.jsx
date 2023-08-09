import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Input } from "semantic-ui-react";
import userService from "../api/UserService";
import { Alert } from "react-bootstrap";

const SignUpSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const SignUp = () => {
  const [alertMessage, setAlertMessage] = useState(null);

  const initialValues = {
    userName: "",
    password: "",
    email: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("HandleSubmit");
    try {
      await userService.createUser(values);
      resetForm();
      setAlertMessage({ type: "success", text: "User created successfully" });
    } catch (error) {
      setAlertMessage({
        type: "danger",
        text:
          "An error occurred while creating the user: " + error.response.data,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {alertMessage && (
        <Alert
          variant={alertMessage.type}
          onClose={() => setAlertMessage(null)}
          dismissible
        >
          {alertMessage.text}
        </Alert>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name="userName" as={Input} placeholder="Username" />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                as={Input}
                placeholder="Password"
              />
            </div>
            <div>
              <Field name="email" type="email" as={Input} placeholder="Email" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
