import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import Video from './Video';
// Project Console: https://console.firebase.google.com/project/aakash-159a2/overview
// Hosting URL: https://aakash-159a2.web.app
// Clever programmer let's build TikTok Clone with ReactJS - firebase init , npm run build , firebase deploy
// if npm gives errors use npm cache clean --force
// Instead of adding the config file I added the automatic stuff from firebase
// To use material UI run : npm install @material-ui/core
// dummy link :- "https://v16m.tiktokcdn.com/5666f29c57e4ff13d85e57a844c11884/5f28f434/video/tos/useast2a/tos-useast2a-pve-0068/2b2eb05b46aa4ee5bf6c5510e69eaa2f/?a=1233&amp;br=2484&amp;bt=1242&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=20200802053756010190185152359E5A25&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=amVqOGVsbzozdjMzaTczM0ApNTozZmlpNDw5NzQ7OjxlaGdyYC1nbmNuNWRfLS0xMTZzcy42MV4yLjFeNWIxYDUtL146Yw%3D%3D&amp;vl=&amp;vr="
function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //fires once when the component loads and whenever video changes
    db.collection('videos').onSnapshot(snapshot => 
      (setVideos(snapshot.docs.map(doc => doc.data()))))
  },[]);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(video => (
        <Video 
          url={video.url}
          channel={video.channel}
          description={video.description}
          song={video.song}
          likes={video.likes}
          messages={video.messages}
          shares={video.shares}
        />))}
      </div>
    </div>
  );
} 

export default App;