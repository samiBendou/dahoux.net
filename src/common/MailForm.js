import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import * as Yup from "yup";
import {Formik} from "formik";

const sendFormMail = (values) =>
    // eslint-disable-next-line no-undef
    Email.send({
        SecureToken: "7ae23154-3d11-4322-bece-03e3b1ae2059",
        To: "sami@dahoux.net",
        From: "sami@dahoux.net",
        Subject: `New contact via form`,
        Body: `Phone number : ${values.phone || "unknown"}<br>Email : ${values.email}<br>Message<br>${values.text}`
    }).then(message => alert(message));

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
            onSubmit={sendFormMail}>
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} sm="6" controlId="formEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control
                                className="mail-form-control"
                                placeholder="name@example.com"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.email}
                            />
                        </Form.Group>
                        <Form.Group as={Col} sm="6" controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                className="mail-form-control"
                                placeholder="+33601020304"
                                type="tel"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={!errors.email && !errors.text && touched.email && touched.text}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Row} controlId="formText" style={{marginRight: "2px", marginLeft: "2px"}}>
                        <Form.Label>Message*</Form.Label>
                        <Form.Control
                            className="mail-form-control"
                            placeholder="255 characters max."
                            type="text"
                            name="text"
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.text && !errors.text}
                            isInvalid={!!errors.text}
                            as="textarea"
                            rows="4"
                            style={{marginBottom: "10px"}}
                        />
                    </Form.Group>
                    <Form.Group style={{textAlign: "center"}}>
                        <Button type="submit" size="lg">Send</Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
};

export default MailForm;