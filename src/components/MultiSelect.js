import { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import { fetchHashtags } from "../api/fetchHashtags";

const MultiSelect = ({ selectedHashtags, setSelectedHashtags }) => {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    const getHashtags = async () => {
      try {
        const hashtags = await fetchHashtags();
        setHashtags(hashtags);
      } catch (error) {
        setHashtags([]);
      }
    };

    getHashtags();
  }, []);

  const onSelect = (selectedList, selectedItem) => {
    setSelectedHashtags([...selectedList]);
  };

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
