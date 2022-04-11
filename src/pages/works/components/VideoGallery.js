import * as React from "react"
import ReactPlayer from 'react-player/youtube'
import "./VideoGallery.css"

class VideoGallery extends React.Component{
  render() {
    return (
      <div className="videoList">
        <div className="video">
          <ReactPlayer url="https://youtu.be/YULEbDIucC4" />
        </div>
        <div className="video">
          <ReactPlayer url="https://youtu.be/YmF-VuSn-gM" />
        </div>
        <div className="video">
          <ReactPlayer url="https://youtu.be/KmfMykFKfzU" />
        </div>
        <div className="video">
          <ReactPlayer url="https://youtu.be/cSheMhV9p3I" />
        </div>
        <div className="video">
          <ReactPlayer url="https://youtu.be/mj5VEDnov5M" />
        </div>
        <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=VzHTxRB6V5w" />
        </div>
        <div className="video">
          <ReactPlayer url="https://youtu.be/5iIGirHhjdY" />
        </div>
      </div>
    );
  }
}

export default VideoGallery;