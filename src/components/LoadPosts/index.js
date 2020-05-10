import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { getTumblrPosts } from "../../helpers/tumblrApi";

class LoadPosts extends Component {
  constructor(props) {
    super(props);
    this.tagFilter = React.createRef();

    this.state = {
      posts: [],
      filters: {
        offset: 0,
        limit: 5,
        reblog_info: true,
        notes_info: true,
        ...props.filters
      },
      totalPosts: null
    };

    if (window.tumblrData.infiniteScrolling)
      window.addEventListener("scroll", () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight
        ) {
          this.loadMore();
        }
      });

    this.loadMore();
  }

  loadMore = () => {
    const { posts, filters, isLoading, totalPosts } = this.state;

    if (
      isLoading ||
      (typeof totalPosts === "number" && posts.length >= totalPosts)
    )
      return;

    this.setState({ isLoading: true });

    getTumblrPosts({
      ...filters,
      callback: data =>
        this.setState({
          posts: [...posts, ...data.posts],
          totalPosts: data.total_posts,
          filters: {
            ...filters,
            offset: filters.offset + filters.limit
          },
          isLoading: false
        })
    });
  };

  render() {
    const { posts, totalPosts, isLoading, filters } = this.state;
    const { children } = this.props;

    const hasResults = !!posts && !!posts.length;

    return (
      <>
        {children({
          isLoading: isLoading || typeof totalPosts !== "number",
          posts: hasResults && posts,
          totalPosts: totalPosts,
          loadMore: this.loadMore
        })}
      </>
    );
  }
}

LoadPosts.defaultProps = {
  filters: {}
};

LoadPosts.propTypes = {
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
  children: PropTypes.func
};

export default LoadPosts;
