import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";
import LoadPosts from "../LoadPosts";
import PostItem from "../PostItem";
import Loading from "../Loading";

const PostDetail = props => {
  const { filters } = props;

  return (
    <LoadPosts filters={filters}>
      {({ posts, isLoading }) => {
        if (isLoading) return <Loading />;
        if (!isLoading && (!posts || !posts[0])) return <p>Post not found</p>;
        return <PostItem post={posts[0]} />;
      }}
    </LoadPosts>
  );
};

PostDetail.propTypes = {};

export default PostDetail;
