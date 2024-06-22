/**
 * Custom code to cater for contact management functionality.
 * ContactCreateForm component allows authenticated users to submit contact
 * messages by providing a reason and message content. It handles form state,
 * submission, and validation errors.
 */

import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ContactForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CharacterCounter from "../../components/CharacterCounter";
import CustomModal from "../../components/CustomModal";

function ContactForm() {
  const [contactData, setContactData] = useState({
    reason: "",
    content: "",
  });
  const { reason, content } = contactData;
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); //Define ShowModal state
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
      setShowModal(true);
    } catch (err) {
      setErrors(err.response?.data); // Set errors from response
      setShowModal(false);
    }
  };

  return (
    <Container className={styles.ContactForm}>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        {showModal && (
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
            rows={6}
            placeholder="Enter your message"
            name="content"
            value={content}
            onChange={handleChange}
          />
          <CharacterCounter text={content} maxLength={300} />
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
        <Button
              className={`${btnStyles.Button} ${btnStyles.Green}`}
          type="Submit"
        >
          Send
        </Button>
      </Form>

      {/* Modal for after successful submit */}
      <CustomModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Thank You"
        message="Thank you for using the contact form. Please note that this is a student project, and while your input is stored, it does not generate an email notification to an administrator. Your message will not be actively monitored. We appreciate your time in testing the app!"
        redirectPath="/" // Specify the redirect path
      />
    </Container>
  );
}

export default ContactForm;
