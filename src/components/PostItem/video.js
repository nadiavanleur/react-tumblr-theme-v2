import React from "react";
import PropTypes from "prop-types";

const VideoPostItem = ({ post }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: post.player[post.player.length - 1].embed_code,
    }}
    className="c-editor-content"
  />
);

VideoPostItem.propTypes = {};

export default VideoPostItem;
