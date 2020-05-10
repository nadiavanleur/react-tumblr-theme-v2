import React from "react";
import PropTypes from "prop-types";

const Notes = ({ notes }) => (
  <table className="c-notes">
    <thead className="u-visually-hidden">
      <tr>
        <th>Type</th>
        <th>Date</th>
        <th>User</th>
      </tr>
    </thead>
    <tbody>
      {notes.map(note => (
        <tr className="c-notes__note">
          <td className="c-notes__note-type">{note.type}</td>
          <td className="c-notes__note-time">
            {new Date(note.timestamp * 1000).toLocaleString()}
          </td>
          <td className="c-notes__note-blog">
            <a href={note.blog_url}>{note.blog_name}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Notes.propTypes = {};

export default Notes;
