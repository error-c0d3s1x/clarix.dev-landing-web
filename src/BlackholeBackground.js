import React, { useEffect, useRef } from 'react';
import './BlackholeAnimation.css';

const BlackholeAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const drawBlackHole = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create the black hole animation effect
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.sin(time * 0.05) * 150 + 250;

      // Create a radial gradient to simulate light bending around the event horizon
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add a glowing effect around the event horizon
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 10;
      ctx.stroke();

      // Add stars or light distortions
      const swirlRadius = radius + 50;
      const swirlX = Math.sin(time * 0.1) * swirlRadius + centerX;
      const swirlY = Math.cos(time * 0.1) * swirlRadius + centerY;

      ctx.beginPath();
      ctx.arc(swirlX, swirlY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();

      time += 0.05;
      requestAnimationFrame(drawBlackHole);
    };

    drawBlackHole();
  }, []);

  return (
    <div className="blackhole-container">
      <canvas ref={canvasRef}></canvas>
      <div className="coming-soon">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default BlackholeAnimation;
