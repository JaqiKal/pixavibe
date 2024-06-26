// Customized to cater for category filtering functionality in the application.

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import appStyles from "../App.module.css";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { axiosReq } from "../api/axiosDefaults";
import formStyles from "../styles/FormStyles.module.css";

/**
 * The component fetches categories from the API and provides a dropdown
 * for users to filter content by selecting a category. It adapts to mobile
 * view if the mobile prop is passed as true.
 *
 * Props:
 * - setFilter (function): Function to update the selected category filter.
 * - mobile (boolean): Flag to indicate if the component is in mobile view.
 */
const CategorySelect = ({ setFilter, mobile }) => {
  const [category, setCategories] = useState([]);

  useEffect(() => {
    //Fetches categories from the API and updates the state.
    const fetchCategories = async () => {
      try {
        const { data } = await axiosReq.get("category/");
        setCategories(data.results);
      } catch (err) {
        console.error("Error fetching categories:", err); // Log error if fetching fails
      }
    };

    CategorySelect.propTypes = {
      setFilter: PropTypes.func.isRequired,
      mobile: PropTypes.bool,
    };

    fetchCategories();
  }, []);

  return (
    <Container
      className={`${appStyles.Content} mb-3 ${
        mobile ? "p-3 text-center container" : ""
      }`}
    >
      <Row className="row d-flex justify-content-center">
        <Form.Group controlId="categorySelect">
          <Form.Label className={formStyles.FormLabel}>
            Filter on Category
          </Form.Label>
          <Form.Control
            className={formStyles.Dropdown}
            as="select"
            onChange={(e) => setFilter(e.target.value)}
            defaultValue=""
          >
            <option value="">All Categories</option>
            {category.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Row>
    </Container>
  );
};

export default CategorySelect;
