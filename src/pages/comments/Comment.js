// Comment component to display individual comments under a post
import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

// The Comment component to display individual comments
const Comment = (props) => {
    // Destructure the properties from the props object
    const { profile_id, profile_image, owner, updated_at, content } = props;

    // Render the comment UI
    return (
        <div>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_at}</span>
                    <p>{content}</p>
                </Media.Body>
            </Media>
        </div>
    );
};

export default Comment;