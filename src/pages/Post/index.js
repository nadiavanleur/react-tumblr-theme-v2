import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import PostDetail from "../../components/PostDetail";

class Post extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Layout>
        <PostDetail
          filters={{
            blogID: window.tumblrData.name,
            id
          }}
        />
      </Layout>
    );
  }
}

Post.propTypes = {};

export default Post;
