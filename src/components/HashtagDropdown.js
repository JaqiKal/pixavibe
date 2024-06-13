/**
 * Customized to cater for rendering and selecting hashtags.
 * This module defines a React component for rendering a
 * dropdown menu of hashtags. It fetches hashtags from the
 * Pixavibe API and allows users to select multiple hashtags.
 */
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { fetchHashtags } from "../api/fetchHashtags";

/**
 * This component fetches hashtags from the API and displays
 * them in a dropdown menu. Users can select multiple hashtags,
 * which updates the parent component's state.
 */
const HashtagDropdown = ({ selectedHashtags, setSelectedHashtags }) => {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    const getHashtags = async () => {
      try {
        const hashtags = await fetchHashtags();
        setHashtags(hashtags);
      } catch (error) {
        console.error("Error fetching hashtags:", error);
        setHashtags([]);
      }
    };

    getHashtags();
  }, []);

  const handleSelect = (eventKey) => {
    const selectedHashtag = hashtags.find(
      (hashtag) => hashtag.id === parseInt(eventKey)
    );
    if (selectedHashtag) {
      setSelectedHashtags((prevSelectedHashtags) =>
        prevSelectedHashtags.includes(selectedHashtag.name)
          ? prevSelectedHashtags.filter(
              (hashtag) => hashtag !== selectedHashtag.name
            )
          : [...prevSelectedHashtags, selectedHashtag.name]
      );
    }
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        Select Hashtags
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {hashtags.map((hashtag) => (
          <Dropdown.Item
            key={hashtag.id}
            eventKey={hashtag.id}
            active={
              Array.isArray(selectedHashtags) &&
              selectedHashtags.includes(hashtag.name)
            }
          >
            {hashtag.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HashtagDropdown;
