import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./assets/scss/styles.scss";

if (typeof window !== "undefined") {
  console.log(window.tumblrData);
} else {
  console.warn("window is undefined");
}

if (typeof window === "undefined" || !window.tumblrData) {
  window.tumblrData = {
    blogUrl: "https://treattheyouthright.tumblr.com/",
    copyrightYears: "2018–2020",
    customCss: "",
    description: "OR R U MINE?",
    favicon: "https://66.media.tumblr.com/avatar_720af10dbabb_128.pnj",
    isIndexPage: true,
    isPermalinkPage: false,
    isSearchPage: false,
    metaDescription: "OR R U MINE?",
    name: "treattheyouthright",
    noSearchResults: false,
    portraitUrl128: "https://66.media.tumblr.com/avatar_720af10dbabb_128.pnj",
    portraitUrl16: "https://66.media.tumblr.com/avatar_720af10dbabb_16.pnj",
    portraitUrl24: "https://66.media.tumblr.com/avatar_720af10dbabb_24.pnj",
    portraitUrl30: "https://66.media.tumblr.com/avatar_720af10dbabb_30.pnj",
    portraitUrl40: "https://66.media.tumblr.com/avatar_720af10dbabb_40.pnj",
    portraitUrl48: "https://66.media.tumblr.com/avatar_720af10dbabb_48.pnj",
    portraitUrl64: "https://66.media.tumblr.com/avatar_720af10dbabb_64.pnj",
    portraitUrl96: "https://66.media.tumblr.com/avatar_720af10dbabb_96.pnj",
    rss: "https://treattheyouthright.tumblr.com/rss",
    safeSearchQuery: "",
    searchPlaceHolder: "Search treattheyouthright",
    searchQuery: "",
    title: "treattheyouthright",
    infiniteScrolling: true,
    maxContentWidth: "700px",
    general: {
      postFooter: true,
      postUsername: true,
      postDate: true,
      postType: true,
      postLink: true,
      postNoteCount: true,
      postNotesList: true,
      postTagsList: true
    },
    overview: {
      layout: "list",
      resultCount: true,
      filter: true,
      filterType: true,
      filterTag: true,
      filterOriginalContent: true,
      postFooter: true,
      postUsername: true,
      postDate: true,
      postType: true,
      postLink: true,
      postNoteCount: true,
      postNotesList: false,
      postTagsList: false
    }
  };
}

ReactDOM.render(<App />, document.getElementById("tumblr-theme-app-root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
