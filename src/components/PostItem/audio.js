import React from "react";
import PropTypes from "prop-types";

const AudioPostItem = ({ post }) => (
  <>
    {post.player ? (
      <div
        dangerouslySetInnerHTML={{ __html: post.player }}
        className="c-editor-content"
      />
    ) : (
      <div
        dangerouslySetInnerHTML={{ __html: post.embed }}
        className="c-editor-content"
      />
    )}
  </>
);

AudioPostItem.propTypes = {};

export default AudioPostItem;
