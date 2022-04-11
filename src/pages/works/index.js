import * as React from "react"

import VideoGallery from "./components/VideoGallery";
import ImageGallery from "./components/ImageGallery";
import Background from "./components/Background";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'animate.css';
import './react-tabs.css';
import "./style.css"

const WorksPage = () => {
  return (
    <main>
      <title>作品集</title>
      <Background className="background" />
      <div className="context">
        
        <h1 className="animate__animated animate__flipInX">Works</h1>
        <p className="animate__animated animate__flipInX">
          部員が制作した作品を載せています。
        </p>

        <Tabs>
          <TabList>
            <Tab>画像</Tab>
            <Tab>動画</Tab>
          </TabList>

          <TabPanel>
            <ImageGallery/>
          </TabPanel>
          <TabPanel>
            <VideoGallery/>
          </TabPanel>
        </Tabs>
        <footer>&copy;2022 会津大学手芸同好会　ページ作成:meg</footer>
      </div>
    </main>
  )
}

export default WorksPage