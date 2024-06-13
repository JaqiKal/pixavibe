/**
 * Customized to cater for rendering and selecting hashtags.
 * This module defines a React component for rendering a
 * dropdown menu of hashtags. It fetches hashtags from the
 * Pixavibe API and allows users to select multiple hashtags.
 */
import React, { useState, useEffect } from "react";
import { getHashtags } from "../api/hashtagServices";
import Dropdown from "react-bootstrap/Dropdown";
//import styles from "../styles/HashtagDropdownModule.css";

/**
 * This component fetches hashtags from the API and displays
 * them in a dropdown menu. Users can select multiple hashtags,
 * which updates the parent component's state.
 */
const HashtagDropdown = ({ selectedHashtags, setSelectedHashtags }) => {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    getHashtags()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setHashtags(response.data);
        } else {
          setHashtags([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching hashtags:", error);
        setHashtags([]);
      });
  }, []);

  const handleSelect = (selectedOptions) => {
    setSelectedHashtags(selectedOptions);
  };

  return (
    <Dropdown onSelect={handleSelect} multiple>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        Select Hashtags
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {hashtags.map((hashtag) => (
          <Dropdown.Item
            key={hashtag.id}
            eventKey={hashtag.id}
            active={selectedHashtags.includes(hashtags.id)}
          >
            {hashtag.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HashtagDropdown;
