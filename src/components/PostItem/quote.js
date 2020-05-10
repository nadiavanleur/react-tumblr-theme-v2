import React from "react";
import PropTypes from "prop-types";

const QuotePostItem = ({ post }) => (
  <blockquote>
    {post.text && (
      <div
        dangerouslySetInnerHTML={{ __html: post.text }}
        className="c-editor-content c-post-item__quote"
      />
    )}
    {post.source && (
      <footer
        dangerouslySetInnerHTML={{ __html: `– ${post.source}` }}
        className="c-editor-content"
      />
    )}
  </blockquote>
);

QuotePostItem.propTypes = {};

export default QuotePostItem;
