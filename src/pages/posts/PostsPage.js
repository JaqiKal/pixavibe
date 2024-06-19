import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CategorySelect from "../../components/CategorySelect";
import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.webp";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostsPage({ message, isFollowingFeed, isLikedFeed }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [blocks, setBlocks] = useState([]);
  const currentUser = useCurrentUser();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: blocksData } = await axiosReq.get("/blocks/");
        setBlocks(blocksData.results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPosts = async () => {
      try {
        const params = new URLSearchParams();
        if (isFollowingFeed) {
          params.append("owner__followed__owner__profile", currentUser?.pk);
        }
        if (isLikedFeed) {
          params.append("likes__owner__profile", currentUser?.profile_id);
          params.append("ordering", "-likes__created_at");
        }
        if (filter) params.append("category", filter);
        if (query) params.append("search", query);

        const { data } = await axiosReq.get(`/posts/?${params.toString()}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    // Reset hasLoaded to false
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
      fetchData();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser, isFollowingFeed, isLikedFeed]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        {/* Search bar */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {/* Add the CategoryFilter component */}
        <CategorySelect setFilter={setFilter} />

        {/* Posts */}
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={posts.results.map((post) =>
                  // If the current user is blocked by the post owner
                  blocks.some(
                    (block) => block.target === post.profile_id
                  ) ? null : (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                  )
                )}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;
