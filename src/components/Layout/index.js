import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Layout = ({ children, sidebarChildren }) => {
  const { tumblrData } = window;

  return (
    <div className="o-layout o-layout--gutter-base">
      <div className="o-layout__cell o-layout__cell--fit">
        <aside className="c-sidebar">
          <nav className="c-sidebar__nav">
            <ul className="o-list-clean">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tagged/yeet">tagged: yeet</Link>
              </li>
            </ul>
          </nav>
          <div>{sidebarChildren}</div>
        </aside>
      </div>
      <div className="o-layout__cell o-layout__cell--fill">
        <main
          className={`o-retain${
            tumblrData.maxContentWidth ? "" : " o-retain--lap"
          }`}
          style={{
            maxWidth: tumblrData.maxContentWidth
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
