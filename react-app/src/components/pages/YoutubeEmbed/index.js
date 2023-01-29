import React from "react";
import PropTypes from "prop-types";

import './YoutubeEmbed.css'

const YoutubeEmbed = ({ url }) => {
  let videoCode = url;
  if (url && url.includes('https://www.youtube.com/')) {
    videoCode = url?.split("v=")?.[1]?.split("&")?.[0];
  }
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoCode}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired
};

export default YoutubeEmbed;