import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import PostsOverview from "../../components/PostsOverview";

class Home extends Component {
  render() {
    return (
      <Layout>
        <PostsOverview
          filters={{
            blogID: window.tumblrData.name
          }}
          showFilter
        />
      </Layout>
    );
  }
}

Home.propTypes = {};

export default Home;
