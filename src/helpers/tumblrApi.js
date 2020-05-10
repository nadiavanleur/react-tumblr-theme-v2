import $ from "jquery";

const API_KEY = "3lRlLdZi1GsTGCpvpwXdHR2FwkCApeoK3hneUzy4e7YkEabdRq";
const BASE_URL = "https://api.tumblr.com/v2/";

/**
 * getSlug
 *
 * @param url [required] example: https://treattheyouthright.tumblr.com/post/[ID]
 *
 * @returns slug example: /post/[ID]
 */
export const getSlug = url => url.split(".tumblr.com")[1];

/**
 * getBlogUrl
 *
 * @param blogID [required]
 *
 * @returns [blogID].tumblr.com
 */
export const getBlogUrl = blogID =>
  blogID.indexOf(".") === -1 ? `${blogID}.tumblr.com` : blogID;

/**
 * addParams
 *
 * @param {baseUrl} [required] string
 * @param {params} [optional] object
 *
 * @returns new url
 */
export const addParams = (baseUrl, params) => {
  let newUrl = `${baseUrl}?api_key=${API_KEY}`;

  if (params)
    Object.keys(params).forEach(key => {
      const value = params[key];
      if (value) newUrl += `&${key}=${value}`;
    });

  return newUrl;
};

/**
 * getTumblrPosts
 *
 * @param {blogID} [required] if no tag
 * @param {tag} [required] if no blogID
 * @param {callback} [required]
 */
export const getTumblrPosts = ({ blogID, callback, ...params }) => {
  const url = addParams(
    `${BASE_URL}${blogID ? `blog/${getBlogUrl(blogID)}/posts` : `tagged`}`,
    params
  );

  $.ajax({
    type: "GET",
    url: url,
    dataType: "jsonp",
    success: ({ response }) => callback(response),
    error: error => console.error(error)
  });
};

/**
 * getTumblrProfile
 *
 * @param {blogID} [required]
 * @param {callback} [required]
 */
export const getTumblrProfile = ({ blogID, callback }) => {
  const url = addParams(`${BASE_URL}blog/${getBlogUrl(blogID)}/info`);

  $.ajax({
    type: "GET",
    url: url,
    dataType: "jsonp",
    success: ({ response }) => callback(!!response.blog ? response.blog : null),
    error: error => console.error(error)
  });
};

/**
 * getTumblrProfileAvatar
 *
 * @param {blogID} [required]
 * @param {size} [optional] [16, 24, 30, 40, 48, 64, 96, 128, 512]
 * @param {callback} [required]
 */
export const getTumblrProfileAvatar = ({ blogID, callback, ...params }) => {
  const url = addParams(`${BASE_URL}blog/${getBlogUrl(blogID)}/avatar`);

  $.ajax({
    type: "GET",
    url: url,
    dataType: "jsonp",
    success: ({ response }) => callback(!!response.blog ? response.blog : null),
    error: error => console.error(error)
  });
};
