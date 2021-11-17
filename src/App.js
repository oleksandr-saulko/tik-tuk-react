import React from 'react';
import Video from './components/Video';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css';

class App extends React.Component {
  state = {
    videos: [],
  };

componentDidMount() {
  fetch("https://tiktok33.p.rapidapi.com/trending/feed", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": "4a27fbd7b8msh309cbfb345dbd4ap1746d7jsnc477ad8c95b1"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(res => this.setState({ videos: res }))
  .catch(err => {
    console.error(err);
  });
}

  render() {
    const { videos } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="app__videos container">
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
}

export default App;
