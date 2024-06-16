// Customized to cater for category filtering functionality in the application.

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import appStyles from "../App.module.css";
import Form from "react-bootstrap/Form";
import styles from "../App.module.css";
import PropTypes from "prop-types";

/**
 * The component fetches categories from the API and provides a dropdown
 * for users to filter content by selecting a category. It adapts to mobile
 * view if the mobile prop is passed as true.
 *
 * Props:
 * - setFilter (function): Function to update the selected category filter.
 * - mobile (boolean): Flag to indicate if the component is in mobile view.
 */
const CategoryFilter = ({ setFilter, mobile }) => {
  const [category, setCategories] = useState([]);

  useEffect(() => {
    //Fetches categories from the API and updates the state.
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://pixavibe-api-1b79caa01d4f.herokuapp.com/category/"
        );
        const data = await response.json();
        setCategories(data.results);
      } catch (err) {
        console.error("Error fetching categories:", err); // Log error if fetching fails
      }
    };

    CategoryFilter.propTypes = {
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
          <Form.Label>Filter on Category</Form.Label>
          <Form.Control
            className={styles.Dropdown}
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

export default CategoryFilter;
