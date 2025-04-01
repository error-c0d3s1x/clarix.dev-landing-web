import React, { useEffect, useRef } from 'react';
import './BlackholeAnimation.css';

const BlackholeAnimation = () => {
  const canvasRef = useRef(null); // Ref to the canvas element
  const imageRef = useRef(null);  // Ref to the image element

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;

    // Set the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0; // Variable to animate the black hole over time

    // Wait for the image to load
    image.onload = () => {
      const drawBlackHole = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas on each frame

        // Create the swirling effect using the black hole image
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.sin(time * 0.05) * 150 + 250;

        // Draw the black hole with a swirling effect
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(time * 0.02); // Add a rotating effect to the image
        ctx.drawImage(image, -radius, -radius, radius * 2, radius * 2); // Draw the black hole image
        ctx.restore();

        time += 0.05; // Increment time for animation

        requestAnimationFrame(drawBlackHole); // Request the next frame of the animation
      };

      drawBlackHole(); // Start the black hole animation
    };

    // Start loading the image (black hole image)
    image.src = '/images/blackhole.jpg'; // Path to the black hole image in your public folder

  }, []);

  return (
    <div className="blackhole-container">
      <canvas ref={canvasRef}></canvas>
      <img ref={imageRef} alt="Black Hole" style={{ display: 'none' }} />
      <div className="coming-soon">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default BlackholeAnimation;
