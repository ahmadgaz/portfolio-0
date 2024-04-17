'use client';

import React from 'react';

const currentFrame = (index: number) =>
  `/experience-assets/skills-frontend/skills-frontend_${index.toString().padStart(5, '0')}.jpg`;

export const Frontend = () => {
  const frameCount = 46;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const animationRequestRef = React.useRef<number | null>(null);
  const [frameIndex, setFrameIndex] = React.useState(0);
  const isMouseOver = React.useRef(false);
  const updateImage = (index: number) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = currentFrame(index);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
    };
  };
  React.useEffect(() => {
    for (let i = frameCount - 1; i >= 0; i--) {
      const img = new Image();
      img.src = currentFrame(i);
    }
    updateImage(frameIndex);
  }, [frameIndex]);
  if (canvasRef.current) {
    updateImage(frameIndex);
  }
  const onMouseEnterHandler = () => {
    isMouseOver.current = true;
    const step = (timestamp: number) => {
      setFrameIndex((prev) => {
        if (prev >= frameCount - 1) {
          animationRequestRef.current &&
            cancelAnimationFrame(animationRequestRef.current);
          return frameCount - 1;
        }
        return prev + 1;
      });
      if (!isMouseOver.current) {
        return;
      }
      animationRequestRef.current = requestAnimationFrame(step);
    };
    animationRequestRef.current = requestAnimationFrame(step);
  };
  const onMouseLeaveHandler = () => {
    isMouseOver.current = false;
    const step = (timestamp: number) => {
      setFrameIndex((prev) => {
        if (prev <= 0) {
          animationRequestRef.current &&
            cancelAnimationFrame(animationRequestRef.current);
          return 0;
        }
        return prev - 1;
      });
      if (isMouseOver.current) {
        return;
      }
      animationRequestRef.current = requestAnimationFrame(step);
    };
    animationRequestRef.current = requestAnimationFrame(step);
  };
  return (
    <div
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className="relative flex w-[300px] flex-col items-center gap-[8px] overflow-hidden rounded-lg bg-[rgb(254,254,254)] p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper max-lg:w-full lg:max-w-[506px]"
    >
      <h3 className="w-full text-heading">Front End Development</h3>
      <p className="w-full text-subheading text-neutral">
        I have experience building front end applications using React, Next.js,
        and Tailwind CSS.
      </p>
      <canvas ref={canvasRef} className="p-3 max-lg:w-[400px] lg:w-[250px]" />
    </div>
  );
};
