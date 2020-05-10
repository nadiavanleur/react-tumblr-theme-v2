import React from "react";
import PropTypes from "prop-types";

const PhotoPostItem = ({ post }) => {
  if (!post.photos) return null;

  let photoWidth = 1 / 3;
  if (post.photos.length === 1) photoWidth = 1;
  if (post.photos.length === 2) photoWidth = 1 / 2;

  return (
    <ul className="o-layout">
      {post.photos.map((photo) => (
        <li
          className={`o-layout_cell u-fraction--${photoWidth * 12}of12@from-md`}
        >
          <figure>
            <img src={photo.original_size.url} alt={photo.caption} />
            {photo.caption && (
              <figcaption className="u-padding-left-base u-padding-right-base">
                {photo.caption}
              </figcaption>
            )}
            <p>
              {post.image_permalink && (
                <a href={post.image_permalink}>Image permalink</a>
              )}
              {post.link && <a href={post.link}>Image link</a>}
            </p>
          </figure>
        </li>
      ))}
    </ul>
  );
};

PhotoPostItem.propTypes = {};

export default PhotoPostItem;
