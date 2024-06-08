/**
 * Amended from walkthrough 'moments', customized to cater for contact management
 * functionality.
 * ContactCreateForm component allows authenticated users to submit contact
 * messages by providing a reason and message content. It handles form state,
 * submission, and validation errors.
 */

import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ContactForm.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ContactForm() {
  const [contactData, setContactData] = useState({
    reason: "",
    content: "",
  });
  const { reason, content } = contactData;
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false); // Define successMessage state
  const currentUser = useCurrentUser(); // Check if user is authenticated
  const history = useHistory();

  // Redirect if user is not authenticated
  useEffect(() => {
    if (!currentUser) {
      history.push("/signin");
    }
  }, [currentUser, history]);

  // Update the state with the input value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles the form submission, sending contact data to the backend.
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = {};

    // Client-side validation
    if (!reason.trim()) {
      formErrors.reason = ["Field cannot be empty"];
    }
    if (!content.trim()) {
      formErrors.content = ["Field cannot be empty"];
    } else if (content.length > 300) {
      formErrors.content = ["Content field cannot exceed 300 characters"];
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await axiosReq.post("/contacts/", contactData);
      setContactData({ reason: "", content: "" }); // Reset form fields
      setErrors({}); // Clear errors
      setSuccessMessage(true); // Show success message
    } catch (err) {
      setErrors(err.response?.data); // Set errors from response
      setSuccessMessage(false); // Hide success message if errors occur
    }
  };

  return (
    <Container className={styles.ContactForm}>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        {successMessage && (
          <Alert variant="success">
            Your message has been sent successfully!
          </Alert>
        )}
        <Form.Group controlId="reason">
          <Form.Label>Reason</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the reason for contacting us"
            name="reason"
            value={reason}
            onChange={handleChange}
          />
          {errors.reason &&
            errors.reason.map((message, idx) => (
              <Alert
                key={idx}
                variant="warning"
                className={styles.errorMessage}
              >
                {message}
              </Alert>
            ))}
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            name="content"
            value={content}
            onChange={handleChange}
          />
          {errors.content &&
            errors.content.map((message, idx) => (
              <Alert
                key={idx}
                variant="warning"
                className={styles.errorMessage}
              >
                {message}
              </Alert>
            ))}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
