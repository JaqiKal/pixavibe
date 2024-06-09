// Custom code, block user button on profile page.
import React from "react";
import { Button } from "react-bootstrap";
import { useSetProfileData } from "../contexts/ProfileDataContext";
import btnStyles from "../styles/Button.module.css";

const BlockButton = ({ profile }) => {
  const { handleBlock, handleUnBlock } = useSetProfileData();
  const { blocking_id } = profile;

  return (
    <>
      {blocking_id ? (
        <Button
          className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
          onClick={() => handleUnblock(profile)}
        >
          Unblock
        </Button>
      ) : (
        <Button
          className={`${btnStyles.button} ${btnStyles.Black}`}
          onClick={() => handleUnblock(profile)}
        >
          Block
        </Button>
      )}
    </>
  );
};

export default BlockButton;
