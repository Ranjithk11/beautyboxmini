'use client';

import { useLightbox } from './Lightbox';

export default function ZoomImage({ src, alt }) {
  const open = useLightbox();

  return (
    <img
      src={src}
      alt={alt}
      onClick={() => open({ src, alt })}
    />
  );
}
