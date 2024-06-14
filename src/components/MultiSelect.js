/**
 * Using the React Multiselect Dropdown component to cater for handling
 * hashtag selection . Fetches hashtags from the API and allows
 * users to select or deselect them.
 */
import { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import { fetchHashtags } from "../api/fetchHashtags";

/**
 * Props:
 * - selectedHashtags (Array): The current list of selected hashtags.
 * - setSelectedHashtags (Function): Function to update the selected hashtags state.
 */
const MultiSelect = ({ selectedHashtags, setSelectedHashtags }) => {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    // Fetch hashtags from the API on component mount.
    const getHashtags = async () => {
      try {
        const hashtags = await fetchHashtags();
        setHashtags(hashtags);
      } catch (error) {
        // In case of an error, set an empty array for hashtags.
        setHashtags([]);
      }
    };

    getHashtags();
  }, []);

  // Handle the selection of a new hashtag.
  const onSelect = (selectedList, selectedItem) => {
    setSelectedHashtags([...selectedList]);
  };

  // Handle the removal of a selected hashtag.
  const onRemove = (selectedList, removedItem) => {
    setSelectedHashtags([...selectedList]);
  };

  return (
    <Multiselect
      name="hashtags"
      options={hashtags} // Options to display in the dropdown
      onSelect={onSelect} // Function will trigger on select event
      onRemove={onRemove} // Function will trigger on remove event
      displayValue="name" // Property name to display in the dropdown options
    />
  );
};

export default MultiSelect;
