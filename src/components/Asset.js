
import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

/*
* Define the Asset component. 
* Apply styles from Asset module and padding.
* This component displays an optional spinner, image, and message.
* if their respective props are true or provided.
*/
const Asset = ({ spinner, src, message }) => {
    return (
        < div className={`${styles.Asset} p-4`}>
            {spinner && <Spinner animation="border" />}
            {src && <img src={src} alt={message} />}
            {message && <p className="mt-4">{message}</p>}
        </div >
    );
};

export default Asset;
