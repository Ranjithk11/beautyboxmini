'use client';

import { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      video.pause();
      return;
    }

    const play = () => {
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

    video.addEventListener('loadeddata', play);
    if (video.readyState >= 2) play();

    return () => video.removeEventListener('loadeddata', play);
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      src="/video/mini-beautypod.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/main.jpeg"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
