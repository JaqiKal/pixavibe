// Custom code inspired by :
// https://www.codu.co/articles/input-field-character-counter-in-react-yhazuav8

import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/CharacterCounter.module.css";

const CharacterCounter = ({ text, maxLength }) => {
  const charCount = text.length;

  return (
    <div className={styles.charCount}>
      {charCount >= maxLength - 25
        ? `Only ${maxLength - charCount} characters left`
        : `${charCount} / ${maxLength} characters`}
    </div>
  );
};

CharacterCounter.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default CharacterCounter;
