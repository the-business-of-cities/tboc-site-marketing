import { parseVideoUrl } from "./parseVideoUrl";
import { Player as ReactVideo } from "video-react";
import { ReactVideoWrapper } from "./ReactVideoWrapper";
import { VimeoWrapper } from "./VimeoWrapper";

import React from "react";
import Vimeo from "react-vimeo";
import YouTube from "react-youtube";
import styled from "styled-components";

const ResponsiveYouTubeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  width: 100%;

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Video = ({ videoUrl, video }) => {
  const parsedVideoUrl = videoUrl ? parseVideoUrl(videoUrl) : undefined;

  if (videoUrl && parsedVideoUrl) {
    return parsedVideoUrl.platform === "vimeo" ? (
      <VimeoWrapper>
        <Vimeo videoId={parsedVideoUrl.id} />
      </VimeoWrapper>
    ) : (
      <ResponsiveYouTubeWrapper>
        <YouTube
          videoId={parsedVideoUrl.id}
          opts={{ height: "100%", width: "100%" }}
        />
      </ResponsiveYouTubeWrapper>
    );
  } else {
    return (
      <ReactVideoWrapper>
        <ReactVideo playsInline src={video} />
      </ReactVideoWrapper>
    );
  }
};
