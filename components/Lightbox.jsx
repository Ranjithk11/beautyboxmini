'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LightboxContext = createContext(null);

export function useLightbox() {
  return useContext(LightboxContext);
}

export default function Lightbox({ children }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!image) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setImage(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [image]);

  return (
    <LightboxContext.Provider value={setImage}>
      {children}
      {image ? (
        <div
          className="lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged drawing"
          onClick={(event) => {
            if (event.target === event.currentTarget) setImage(null);
          }}
        >
          <button type="button" aria-label="Close" onClick={() => setImage(null)}>×</button>
          <img src={image.src} alt={image.alt} />
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}
