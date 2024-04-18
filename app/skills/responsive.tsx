'use client';

import React from 'react';

const currentFrame = (index: number) =>
  `/experience-assets/skills-responsive/skills-responsive_${index.toString().padStart(5, '0')}.jpg`;

export const Responsive = () => {
  const frameCount = 91;
  const desktopCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const mobileCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const animationRequestRef = React.useRef<number | null>(null);
  const [frameIndex, setFrameIndex] = React.useState(0);
  const isMouseOver = React.useRef(false);
  const updateImage = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    index: number,
  ) => {
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
    updateImage(desktopCanvasRef, frameIndex);
  }, [frameIndex]);
  React.useEffect(() => {
    updateImage(mobileCanvasRef, 0);
  }, []);
  React.useEffect(() => {
    let iterations = 3;
    const interval = setInterval(() => {
      onMouseEnterOrLeaveHandler();
      iterations--;
      if (iterations === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
      animationRequestRef.current &&
        cancelAnimationFrame(animationRequestRef.current);
    };
  }, []);
  if (desktopCanvasRef.current) {
    updateImage(desktopCanvasRef, frameIndex);
  }
  const onMouseEnterOrLeaveHandler = () => {
    isMouseOver.current = true;
    const step = () => {
      setFrameIndex((prev) => {
        if ((prev + 1) % ((frameCount - 1) / 3) === 0) {
          animationRequestRef.current &&
            cancelAnimationFrame(animationRequestRef.current);
          return prev + 1 >= frameCount - 1 ? 0 : prev + 1;
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
  return (
    <div
      onMouseEnter={onMouseEnterOrLeaveHandler}
      onMouseLeave={onMouseEnterOrLeaveHandler}
      className="relative flex flex-1 flex-col items-center gap-[8px] overflow-hidden rounded-lg bg-[rgb(254,254,254)] p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper max-lg:min-h-[350px] lg:min-w-[350px]"
    >
      <h3 className="z-10 w-full text-heading">Responsive User Interfaces</h3>
      <p className="z-10 w-full text-subheading text-neutral">
        I design and develop user interfaces that{' '}
        <strong className="font-bold">adapt seamlessly across devices</strong>.
      </p>
      <div className="relative h-[200px] max-lg:w-[250px] lg:w-[350px]">
        <canvas
          ref={desktopCanvasRef}
          className="absolute -bottom-20 -left-20 w-[450px] p-3 max-lg:hidden"
        />
        <canvas
          ref={mobileCanvasRef}
          className="absolute -bottom-16 -left-24 w-[400px] p-3 lg:hidden"
        />
      </div>
    </div>
  );
};
