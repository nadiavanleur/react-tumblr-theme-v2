import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import PostsOverview from "../../components/PostsOverview";

class Tagged extends Component {
  render() {
    const { tag } = this.props.match.params;

    return (
      <Layout>
        <h3>tagged: {tag}</h3>
        <PostsOverview
          filters={{
            blogID: window.tumblrData.name,
            tag
          }}
          showFilter
          showTag={false}
        />
      </Layout>
    );
  }
}

Tagged.propTypes = {};

export default Tagged;
