import React, { Component } from "react";
import PropTypes from "prop-types";

class PostFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tumblrData } = window;
    const { showTag, defaultValue, onChange, resultCount } = this.props;

    if (!tumblrData) return null;

    return (
      <div className="c-filter">
        <div className="o-layout o-layout--gutter-huge o-layout--align-middle">
          <div className="o-layout__cell o-layout__cell--fill">
            {resultCount && <span className="u-text-small">{resultCount}</span>}
          </div>
          <div className="o-layout__cell o-layout__cell--fit">
            <div className="o-layout o-layout--gutter-large o-layout--align-right o-layout--align-middle">
              {tumblrData.overview.filterType && (
                <div className="o-layout__cell o-layout__cell--fit">
                  <div className="o-layout o-layout--gutter-small o-layout--align-middle">
                    <div className="o-layout__cell o-layout__cell--fit">
                      <label htmlFor="filter-type">Type post</label>
                    </div>
                    <div className="o-layout__cell o-layout__cell--fit">
                      <div className="e-select__container">
                        <select
                          name="type"
                          id="filter-type"
                          defaultValue={defaultValue.type}
                          onChange={onChange}
                        >
                          <option value="">all</option>
                          <option value="text">text</option>
                          <option value="photo">photo</option>
                          <option value="quote">quote</option>
                          <option value="link">link</option>
                          <option value="chat">chat</option>
                          <option value="audio">audio</option>
                          <option value="video">video</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tumblrData.overview.filterTag && showTag && (
                <div className="o-layout__cell o-layout__cell--fit">
                  <div className="o-layout o-layout--gutter-small o-layout--align-middle">
                    <div className="o-layout__cell o-layout__cell--fit">
                      <label htmlFor="filter-tag">Tag</label>
                    </div>
                    <div className="o-layout__cell o-layout__cell--fit">
                      <input
                        id="filter-tag"
                        name="tag"
                        type="text"
                        defaultValue={defaultValue.tag}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {tumblrData.overview.filterOriginalContent && (
                <div className="o-layout__cell o-layout__cell--fit">
                  <div className="o-layout o-layout--gutter-small o-layout--align-middle">
                    <div className="o-layout__cell o-layout__cell--fit">
                      <label htmlFor="filter-original-content">
                        Show original content only
                      </label>
                    </div>
                    <div className="o-layout__cell o-layout__cell--fit">
                      {" "}
                      <input
                        id="filter-original-content"
                        type="checkbox"
                        name="showOriginalContentOnly"
                        value={null}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostFilter.defaultProps = {
  defaultValue: {},
  showTag: true
};

PostFilter.propTypes = {
  defaultValue: PropTypes.shape({
    blogID: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    tag: PropTypes.string,
    limit: PropTypes.number,
    offset: PropTypes.number,
    reblog_info: PropTypes.bool,
    notes_info: PropTypes.bool,
    filter: PropTypes.string,
    before: PropTypes.string,
    npf: PropTypes.bool
  }),
  showTag: PropTypes.bool
};

export default PostFilter;
