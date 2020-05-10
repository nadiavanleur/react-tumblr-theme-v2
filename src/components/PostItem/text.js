import React from "react";
import PropTypes from "prop-types";

const TextPostItem = ({ post, isReblogged }) => (
  <>
    {post.title && <h3>{post.title}</h3>}
    <div
      dangerouslySetInnerHTML={{ __html: post.body }}
      className="c-editor-content c-editor-content--body"
    />
  </>
);

TextPostItem.propTypes = {};

export default TextPostItem;
