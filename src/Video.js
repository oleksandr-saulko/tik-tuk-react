import React, { useEffect, useRef, useState } from "react";
import useElementOnScreen from './hooks/useElementOnScreen'
import VideoPlayButton from "./VideoPlayButton";
import { convert } from "./functions/convert";
import "./Video.css";

const Video = ({
  avatar,
  url,
  name,
  nickName,
  text,
  hashtags,
  likes,
  comments,
  shares
}) => {
  console.log(url);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  }
  const isVisibile = useElementOnScreen(options, videoRef)
  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true)
      }
    }
    else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile])


  return (
    <div className="video">
      <div className="mb-5">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <a href="/User"><img
                className="user-avatar"
                src={avatar} />
              </a>
              <div>
                <h6 className="mb-0">
                  <a href="/User" className=" fw-bold">{name}</a>
                  {' '}
                  <span>{nickName}</span>
                </h6>
                <small className="fw-bold">{text}</small>
                <p className="fw-bold">{hashtags.length > 0
                  ? hashtags.map(tag => (
                    <a key={tag.id} href='#'>#{tag.name}</a>
                  ))
                  : ''
                }</p>
              </div>
            </div>
            <a href="#" className="btn btn-outline-danger">
              Follow
            </a>
          </div>
          <div className="mt-3 d-flex align-items-end">
            <div className="user-video">
              <video className="video_player" loop preload="true" ref={videoRef} onClick={onVideoClick} src={url}></video>
              {!playing && <VideoPlayButton onVideoClick={onVideoClick} />}
            </div>
            <div className="ms-3">
              <div className="d-flex flex-column align-items-center">
                <div className="actions">
                  <i className="fas fa-heart"></i>
                </div>
                <span className="fw-bold">{convert(likes)}</span>
              </div>
              <div className="d-flex flex-column align-items-center my-4">
                <div className="actions">
                  <i className="fas fa-comment-dots"></i>
                </div>
                <span className="fw-bold">{convert(comments)}</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="actions">
                  <i className="fas fa-share"></i>
                </div>
                <span className="fw-bold">{convert(shares)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;