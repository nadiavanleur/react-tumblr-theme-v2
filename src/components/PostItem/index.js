import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { getSlug } from "../../helpers/tumblrApi";

import TextPostItem from "./text";
import PhotoPostItem from "./photo";
import QuotePostItem from "./quote";
import LinkPostItem from "./link";
import ChatPostItem from "./chat";
import AudioPostItem from "./audio";
import VideoPostItem from "./video";
import Tags from "../Tags";
import Notes from "../Notes";

const POST_TYPES = {
  text: TextPostItem,
  photo: PhotoPostItem,
  quote: QuotePostItem,
  link: LinkPostItem,
  chat: ChatPostItem,
  audio: AudioPostItem,
  video: VideoPostItem
};

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null
    };
  }

  render() {
    const { tumblrData = {} } = window;
    const { post, isOverviewItem } = this.props;
    const {
      postFooter,
      postUsername,
      postDate,
      postType,
      postLink,
      postPlayCount,
      postNoteCount,
      postNotesList,
      postTagsList
    } = tumblrData[isOverviewItem ? "overview" : "general"];
    const isReblogged = !!post.reblogged_root_id;
    const PostItemType = POST_TYPES[post.type];
    const postDateObj = post.timestamp && new Date(post.timestamp * 1000);
    const currentDateObj = new Date();

    return (
      <article
        className={`c-post-item c-post-item--${post.type} c-post-item--${
          isReblogged ? "reblogged" : "original"
        }`}
      >
        {PostItemType && <PostItemType post={post} isReblogged={isReblogged} />}
        {postFooter && (
          <footer className="c-post-item__footer">
            {postUsername && (
              <div className="u-margin-bottom-small">
                <a
                  href={getSlug(post.post_url)}
                  target="_blank"
                  className="c-post-item__user-link"
                >
                  {tumblrData.name}
                </a>
                {isReblogged && (
                  <>
                    {"  ⇆  "}
                    <a
                      href={post.reblogged_root_url}
                      target="_blank"
                      className="c-post-item__user-link"
                    >
                      {post.reblogged_root_name}
                    </a>
                  </>
                )}
              </div>
            )}
            {post.body && post.type !== "text" && post.type !== "chat" && (
              <div
                dangerouslySetInnerHTML={{ __html: post.body }}
                className="c-editor-content c-editor-content--body u-margin-bottom-small"
              />
            )}
            {post.caption && (
              <div
                dangerouslySetInnerHTML={{ __html: post.caption }}
                className="c-editor-content c-editor-content--caption u-margin-bottom-small"
              />
            )}
            {post.description && (
              <div
                dangerouslySetInnerHTML={{ __html: post.description }}
                className="c-editor-content c-editor-content--description u-margin-bottom-small"
              />
            )}
            <ul className="o-layout o-layout--gutter-large o-layout--align-middle u-margin-bottom-small">
              {postDate && postDateObj && (
                <li className="o-layout__cell o-layout__cell--fit">
                  <span className="c-post-item__date">
                    <Moment
                      date={postDateObj}
                      format={
                        postDateObj.getFullYear() !==
                        currentDateObj.getFullYear()
                          ? "D MMM YY"
                          : "D MMM"
                      }
                    />
                  </span>
                </li>
              )}
              {postType && (
                <li className="o-layout__cell o-layout__cell--fit">
                  {post.type}
                </li>
              )}
              {postNoteCount && (
                <li className="o-layout__cell o-layout__cell--fit">
                  {!post.note_count && `No notes`}
                  {post.note_count === 1 && `1 note`}
                  {post.note_count > 1 &&
                    `${post.note_count.toLocaleString("en-US")} notes`}
                </li>
              )}
              {postPlayCount && !!post.plays && (
                <li className="o-layout__cell o-layout__cell--fit">
                  {post.plays === 1 && `Played once`}
                  {post.plays > 1 &&
                    `Played ${post.plays.toLocaleString("en-US")} times`}
                </li>
              )}
              {postLink && (
                <li className="o-layout__cell o-layout__cell--fit">
                  <a
                    href={getSlug(post.post_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See post
                  </a>
                </li>
              )}
            </ul>
            {postNotesList && post.notes && !!post.notes.length && (
              <div className="u-margin-bottom-small">
                <Notes notes={post.notes} />
              </div>
            )}
            {postTagsList && post.tags && !!post.tags.length && (
              <div className="u-margin-bottom-small">
                <Tags tags={post.tags} />
              </div>
            )}
          </footer>
        )}
      </article>
    );
  }
}

PostItem.propTypes = {};

export default PostItem;
