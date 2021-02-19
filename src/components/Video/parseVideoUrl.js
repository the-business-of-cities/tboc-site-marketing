import * as R from "ramda";

import fetch from "node-fetch";
import parseUrl from "url-parse";
import parseXML from "xml-parser";

export const parseVideoUrl = videoUrl => {
  return R.contains("vimeo", videoUrl)
    ? {
        platform: "vimeo",
        id: parseUrl(videoUrl, true).pathname.split("/")[1]
      }
    : {
        platform: "youtube",
        id: parseUrl(videoUrl, true).query.v
      };
};

const extractVimeoThumbnail = R.pipe(
  parseXML,
  R.path(["root", "children", 0, "children"]),
  R.find(R.propEq("name", "thumbnail_large")),
  R.prop("content"),
  R.replace(/https?:/, "")
);

const parseVimeoThumbnail = (videoId, callback) =>
  fetch(`http://vimeo.com/api/v2/video/${videoId}.xml`)
    .then(response => response.text())
    .then(extractVimeoThumbnail)
    .then(callback);

const parseYouTubeThumbnail = (videoId, callback) => {
  callback(`//img.youtube.com/vi/${videoId}/hqdefault.jpg`);
};

export const parseVideoThumbnail = (videoUrl, callback) => {
  const video = parseVideoUrl(videoUrl);

  video.platform === "vimeo"
    ? parseVimeoThumbnail(video.id, callback)
    : parseYouTubeThumbnail(video.id, callback);
};
