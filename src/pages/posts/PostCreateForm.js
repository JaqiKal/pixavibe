/*
 * Create post form with title, content, and image inputs.
 * Use useRef for image file input and useHistory for navigation.
 * Handle form submission and errors, update state, and log data.
 * Responsive layout for mobile and desktop views.
 */
import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.webp";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import MultiSelect from "../../components/MultiSelect";

// The main component function.
function PostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [showHashtagDropdown] = useState(false); // Make dropdown invisible for user, reason in TESTING.md

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    hashtags: [],
  });
  const { title, content, image, category } = postData;

  const [categories, setCategories] = useState([]);

  const imageInput = useRef(null);
  const history = useHistory();

  // Fetch categories from the backend on component mount.
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://pixavibe-api-1b79caa01d4f.herokuapp.com/category/"
        );
        const data = await response.json();
        if (Array.isArray(data.results)) {
          setCategories(data.results);
        } else {
          console.error("Fetched data.results is not an array:", data.results);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  /*
   * Fetch available hashtags from the backend on component mount.
   * Store them in the postData state.
   */
  useEffect(() => {
    async function fetchHashtags() {
      try {
        const { data } = await axiosReq.get("/hashtags");
        setPostData((prevData) => ({
          ...prevData,
          availableHashtags: data.results, // Ensure correct format
        }));
        console.log("Fetched Hashtags:", data.results); // Log fetched hashtags
      } catch (err) {
        console.log(err);
      }
    }

    fetchHashtags();
  }, []);

  // Update the postData state with the input values
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Update the image in the postData state with the selected file
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  /*
   * Submit the form data to the backend and navigate to the new post page.
   * Handle errors and update the errors state.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    console.log(selectedHashtags.map((item) => item.name).join(","));

    // Convert array to comma-separated string

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    if (postData.category) {
      formData.append("category", postData.category);
    }
    formData.append(
      "hashtags",
      JSON.stringify(selectedHashtags.map((tag) => tag.id))
    ); // Append hashtags as JSON string

    console.log("Post Data to be submitted:", postData); // Log the data being sent
    console.log("FormData to be submitted:", formData.get("hashtags")); // Log the formData content
    console.log("Selected Hashtags at submit:", selectedHashtags); // Log selected hashtags

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* <Form.Group>
        <Form.Label>Hashtags</Form.Label>
        <MultiSelect
          selectedHashtags={selectedHashtags}
          setSelectedHashtags={setSelectedHashtags}
        />
      </Form.Group>
      {errors?.hashtags?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}*/}

      {/* Conditionally render the MultiSelect component */}
      {showHashtagDropdown && (
        <MultiSelect
          options={postData.availableHashtags}
          value={selectedHashtags}
          onChange={setSelectedHashtags}
          label="Hashtags"
        />
      )}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Black}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Green}`}
        type="submit"
      >
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
