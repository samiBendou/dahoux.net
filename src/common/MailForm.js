import React from "react";
import {Button, Form} from "react-bootstrap";
import * as Yup from "yup";
import {Formik} from "formik";

const MailSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().max(16, "16 characters max").ensure(),
    text: Yup.string().min(16, "16 characters min").max(255, "255 characters max").required("Required")
});

const MailForm = () => {
    return (
        <Formik
            initialValues={{
                email: "",
                phone: "",
                text: ""
            }}
            validationSchema={MailSchema}
            onSubmit={values => {
                // eslint-disable-next-line no-undef
                Email.send({
                    SecureToken: "7ae23154-3d11-4322-bece-03e3b1ae2059",
                    To: "sami@dahoux.net",
                    From: "sami@dahoux.net",
                    Subject: `New contact via form`,
                    Body: `Phone number : ${values.phone || "unknown"}<br>Email : ${values.email}<br>Message<br>${values.text}`
                }).then(message => alert(message));
            }}>
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={!errors.email && !errors.text && touched.email && touched.text}
                        />
                    </Form.Group>
                    <Form.Group controlId="formText">
                        <Form.Control
                            type="text"
                            name="text"
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.text && !errors.text}
                            isInvalid={!!errors.text}
                        />
                        <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    );
};

export default MailForm;