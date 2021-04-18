import React, { useEffect, useRef, useState } from 'react';
import { StyledFullPaper } from '../atoms/Paper';
import styled from 'styled-components';
import { BasicButton } from '../atoms/Button';

const Camera = () => {
  const [cameraStatus, setCameraStatus] = useState(true);
  const myVideo = document.createElement('video');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  myVideo.muted = true;

  useEffect(() => {
    // デバイスの接続
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    }).then((stream) => {
      if (videoRef) {
        videoRef.current.srcObject = stream;
      }
    }).catch((err) =>{
      setCameraStatus(false);
    })
  }, []);

  const snapshot=() => {
    console.info('スナップショットをとるよ！');
    var context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 500, 400);
}
  return (
    <StyledFullPaper>
    {cameraStatus ?
      <StyledVideo
        ref={videoRef}
        id="local-video"
        autoPlay
        playsInline
        muted
      /> :
      <p>カメラが許可されていません</p>}
      <BasicButton disabled={!cameraStatus} onClick={()=>snapshot()}>写真をとる</BasicButton>
      <canvas
        ref={canvasRef}
        width="500px"
        height="500px"
        />
    </StyledFullPaper>
  )
}

export default Camera;

const StyledVideo = styled.video`
width: 500px;
height: 500px;
`;

