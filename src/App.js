import React, { useEffect, useState } from 'react';
import Video from './Video';
import videoData from './data.json';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css';


function App() {
  const [ videos, setState ] = useState([]);
  useEffect(() => setState(videoData), []);
  
  return (
    <div className="app">
      <Header />
      <div className="app_videos container">
        {videos.map(({
          id,
          authorMeta,
          videoUrl,
          description,
          text,
          hashtags,
          commentCount,
          shareCount
        }) =>
          <Video
            key={id}
            avatar={authorMeta.avatar}
            name={authorMeta.name}
            nickName={authorMeta.nickName}
            url={videoUrl}
            description={description}
            text={text}
            hashtags={hashtags}
            likes={authorMeta.heart}
            comments={commentCount}
            shares={shareCount}
          />
        )}
      </div>
    </div>
  );
}

export default App;
