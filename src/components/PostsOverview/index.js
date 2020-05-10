import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import PostItem from "../PostItem";
import PostFilter from "../PostFilter";
import LoadPosts from "../LoadPosts";
import Loading from "../Loading";

class PostsOverview extends Component {
  constructor(props) {
    super(props);
    this.tagFilter = React.createRef();

    this.state = {
      filters: {
        ...props.filters
      }
    };
  }

  handleFilterChange = e => {
    const { name, value, checked } = e.target;
    const { filters } = this.state;

    clearTimeout(this.filterChangeTimeout);

    this.filterChangeTimeout = setTimeout(() => {
      this.setState({
        filters: {
          ...filters,
          [name]: value || checked || null
        }
      });
    }, 350);
  };

  render() {
    const { tumblrData } = window;
    const { showFilter, showTag } = this.props;
    const {
      filters: { showOriginalContentOnly, ...filters }
    } = this.state;
    // console.log(filters);

    return (
      <LoadPosts filters={filters} key={`filter:${JSON.stringify(filters)}`}>
        {({ isLoading, posts, totalPosts, loadMore }) => {
          let postsWithFilter = posts;

          if (showOriginalContentOnly)
            postsWithFilter = postsWithFilter.filter(
              post => !post.reblogged_root_id
            );

          return (
            <>
              {showFilter && (
                <PostFilter
                  defaultValue={filters}
                  onChange={this.handleFilterChange}
                  showTag={showTag}
                  resultCount={`${
                    !posts.length || isLoading ? "☮︎" : posts.length
                  } of ${totalPosts || "☮︎"}`}
                />
              )}
              {!isLoading && !postsWithFilter && <p>No results</p>}
              {postsWithFilter && (
                <ol className="o-list-clean">
                  {postsWithFilter.map(post => (
                    <li
                      className="u-margin-bottom-huge"
                      key={`post-${post.id_string}`}
                    >
                      <PostItem post={post} isOverviewItem />
                    </li>
                  ))}
                </ol>
              )}
              {isLoading && showOriginalContentOnly && (
                <p className="u-text-small">
                  <i>
                    Newly loaded posts may not be visible since the "Show
                    original content only"-filter is turned on.
                  </i>
                </p>
              )}
              {posts.length < totalPosts && (
                <button
                  onClick={loadMore}
                  disabled={isLoading}
                  className="c-button u-margin-bottom-huge"
                >
                  {isLoading ? <Loading /> : "Show more posts"}
                </button>
              )}
              {posts.length >= totalPosts && (
                <p className="u-text-small">
                  <i>That was all ☮︎</i>
                </p>
              )}
            </>
          );
        }}
      </LoadPosts>
    );
  }
}

PostsOverview.defaultProps = {
  filters: {},
  showFilter: true
};

PostsOverview.propTypes = {
  filters: PropTypes.shape({
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
  showFilter: PropTypes.bool,
  showTag: PropTypes.bool
};

export default PostsOverview;
