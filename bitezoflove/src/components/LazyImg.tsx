'use client'

import React, { useState } from 'react';
import { motion } from 'framer';

const LazyImage = ({ src, alt, ...props } : any) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!loaded && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'transparent' }}>
          {/* You can add a loading spinner or placeholder here */}
        </div>
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        // style={{ display: loaded ? 'block' : 'none', width: '100%', height: '100%' }}
        {...props}
      />
    </div>
  );
};

export default LazyImage;