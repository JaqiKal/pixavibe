/*
 * This component represents an individual post in the application.
 * It includes details such as the post owner, profile image, title,
 * content, and like/comment counts. The component uses Bootstrap for
 * layout and styling and integrates with the CurrentUserContext to
 * determine the current user's details.
 */
import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
  // Destructuring props to extract post details
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
    category_name,
    hashtags,
  } = props;

  console.log("Hashtags:", hashtags); // Ensure hashtags are passed correctly

  const currentUser = useCurrentUser(); // Getting the current user from the context
  const is_owner = currentUser?.username === owner; // Checking if the current user is the owner of the post
  const history = useHistory();

  // Function to edit own post
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // Function to delete own post
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle liking the post
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                likes_count: (post.likes_count || 0) + 1, // Use (post.likes_count || 0) to handle null/undefined
                like_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle unlike the post
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
              ...post,
              likes_count:
              post.likes_count - 1,
              like_id: null
            }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  /*
   * Renders the post card with profile details, post image, title, content,
   * and interactive like/comment buttons. Handles different states based on
   * whether the current user is the post owner, logged in, or unauthenticated.
   */
  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {category_name && (
          <Card.Text className="text-muted">
            Category: {category_name}
          </Card.Text>
        )}
        {/* Placeholder for hashtags display */}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
