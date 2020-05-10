import React from "react";
import PropTypes from "prop-types";

const ChatPostItem = ({ post }) => (
  <div className="u-padding-base u-padding-bottom-none">
    {post.title && <h3>{post.title}</h3>}
    <table>
      <tbody>
        {post.dialogue.map(item => (
          <tr>
            <th>{item.name}</th>
            <td>{item.phrase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ChatPostItem.propTypes = {};

export default ChatPostItem;
