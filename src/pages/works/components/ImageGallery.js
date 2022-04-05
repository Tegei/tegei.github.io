import * as React from "react"
import "./ImageGallery.css"
import Zoom from 'react-medium-image-zoom'

class ImageGallery extends React.Component {
  render() {
    return (
      <div className="imageList">
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/cellshading.png").default}alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/composite.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/ebifry.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/floatingrobot.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/girl.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/greenlight.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/monitors.jpg").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/monsterball.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/onigiri.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/pagoda.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/passage.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/planetcore.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/rockandglass.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/rousoku.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/skull.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/snitch.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/snowcrystal.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/spherepuzzle.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/tea.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/toudai.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/calculatorgirl.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/umbrella.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/signupmeg.png").default} alt="work" className="image" /></Zoom>
        <Zoom overlayBgColorEnd='rgba(0, 0, 0, 0.8)'><img src={require("../img/signupmono.png").default} alt="work" className="image" /></Zoom>
      </div>
    );
  }
}

export default ImageGallery;

