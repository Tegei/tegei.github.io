import * as React from "react"
import "./VideoGallery.css"

class VideoGallery extends React.Component{
  render() {
    return (
      <div className="videoList">
        <div className="embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YULEbDIucC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YmF-VuSn-gM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cSheMhV9p3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mj5VEDnov5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VzHTxRB6V5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NddmAwyXFkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default VideoGallery;