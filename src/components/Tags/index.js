import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => (
  <div className="c-tags">
    <ul className="o-layout o-layout--gutter-base">
      {tags.map(tag => (
        <li className="o-layout__cell o-layout__cell--fit" key={tag}>
          <Link to={`/tagged/${tag}`} className="c-tags__tag">
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Tags;
