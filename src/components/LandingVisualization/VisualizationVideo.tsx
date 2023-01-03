import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material';
import quickModelVideo from '../../assets/img/quickmodel-vid.mp4';

const Video = styled('video')`
  width: 100%;
  box-shadow: 0 0 1px #373737;
`;

export const VisualizationVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // appease Gatsby build and make sure the browser has the intersection
    // observer.
    if (
      typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      videoRef.current
    ) {
      const videoEl = videoRef.current;
      const observer = new IntersectionObserver(
        ([entry], observer) => {
          // only make the chart once on initial intersect
          if (entry.isIntersecting) {
            videoEl.play();
            observer.unobserve(videoEl);
          }
        },
        { rootMargin: '500px' }
      );
      observer.observe(videoEl);
    }
  }, []);
  return (
    <Video muted preload='none' loop ref={videoRef}>
      <source src={quickModelVideo} type='video/mp4' />
    </Video>
  );
};
