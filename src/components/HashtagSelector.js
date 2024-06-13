import React, { useState } from "react";
import HashtagDropdown from "./components/HashtagDropdown";

const HashtagSelector = () => {
  const [selectedHashtags, setSelectedHashtags] = useState([]);

  return (
    <div>
      <h1>Select Hashtags</h1>
      <HashtagDropdown
        selectedHashtags={selectedHashtags}
        setSelectedHashtags={setSelectedHashtags}
      />
    </div>
  );
};

export default HashtagSelector;
