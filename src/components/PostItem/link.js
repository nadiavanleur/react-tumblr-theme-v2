import React from "react";
import PropTypes from "prop-types";
import PhotoPostItem from "./photo";

const LinkPostItem = ({ post }) => {
  return (
    <>
      {post.photos && !!post.photos.length && <PhotoPostItem post={post} />}
      <div className="u-padding-base u-padding-bottom-none">
        {post.title && <h3>{post.title}</h3>}
        {post.excerpt && <p>{post.excerpt}</p>}
        {post.link_author && <p>{post.link_author}</p>}
        {post.url && (
          <a href={post.url} title={post.url}>
            <b>{post.publisher}</b>{" "}
            <small>
              <i>{post.url}</i>
            </small>
          </a>
        )}
      </div>
    </>
  );
};

LinkPostItem.propTypes = {};

export default LinkPostItem;
