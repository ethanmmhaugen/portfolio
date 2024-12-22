import React, { useState, useEffect } from 'react';
import './BackgroundSlider.scss';

interface BackgroundSliderProps {
  images: string[]; // Array of image URLs
  interval?: number; // Duration each image is displayed (in milliseconds)
  animationDuration?: number; // Duration of the panZoom animation (in seconds)
  children?: React.ReactNode;
}

const BackgroundSlider: React.FC<BackgroundSliderProps> = ({
  images,
  children,
  interval = 20000, // Default to 20 seconds
  animationDuration = 20, // Default to 20 seconds
}) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const intervalId: NodeJS.Timeout = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="backgroundContainer">
      {images &&
        images.map((image, index) => (
          <div
            key={index}
            className={`background ${currentImage === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              animationDuration: `${animationDuration}s`,
            }}
            aria-hidden="true"
          ></div>
        ))}
      {children}
    </div>
  );
};

export default BackgroundSlider;
