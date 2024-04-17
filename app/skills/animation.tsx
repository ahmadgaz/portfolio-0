'use client';

import React from 'react';

const currentFrame = (index: number) =>
  `/experience-assets/skills-animation/skills-animations_${index.toString().padStart(5, '0')}.jpg`;

export const Animation = () => {
  const frameCount = 30;
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
    const step = () => {
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
    const step = () => {
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
      className="relative flex w-[250px] flex-col items-center gap-[8px] overflow-hidden rounded-lg bg-[rgb(254,254,254)] p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper max-lg:w-full lg:max-w-[506px]"
    >
      <h3 className="w-full text-heading">Smooth Animations</h3>
      <p className="w-full text-subheading text-neutral">
        I create engaging animations to{' '}
        <strong className="font-bold">enhance user interactions</strong>.
      </p>
      <canvas ref={canvasRef} className="w-[200px] p-3" />
    </div>
  );
};
