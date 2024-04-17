'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { lora } from './lora';

export const ProfilePic = () => {
  // Setting ASCII frames logic
  const profilePicAsciiRef = React.useRef<HTMLPreElement>(null);
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    const setAscii = async () =>
      fetch('profile-pic-ascii.json')
        .then((response) => response.json())
        .then((data) => {
          const asciiFrames = data.ascii.split('=');
          let iteration = 0;
          interval = setInterval(() => {
            if (profilePicAsciiRef.current) {
              profilePicAsciiRef.current.textContent = asciiFrames[iteration];
            }
            iteration =
              iteration === asciiFrames.length - 3 ? 0 : iteration + 1;
          }, 100);
        });
    setAscii();
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  // Profile Pic Mouse Trailer Logic
  const profilePicRef = React.useRef<HTMLImageElement>(null);
  const [trailerRadius, setTrailerRadius] = React.useState(155);
  const [trailerX, setTrailerX] = React.useState(155);
  const [trailerY, setTrailerY] = React.useState(155);
  const animationRequestRef = React.useRef<number | null>(null);
  const isMouseOverPic = React.useRef(false);
  const speed = 10;

  React.useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      if (!profilePicRef.current) {
        return;
      }
      const x = e.clientX,
        y = e.clientY,
        boundingRect = profilePicRef.current.getBoundingClientRect(),
        width = boundingRect.width,
        height = boundingRect.height,
        offsetLeft = boundingRect.left,
        offsetTop = boundingRect.top;
      if (
        x > offsetLeft &&
        x < offsetLeft + width &&
        y > offsetTop &&
        y < offsetTop + height
      ) {
        setTrailerX(x - offsetLeft);
        setTrailerY(y - offsetTop);
      }
    };
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      animationRequestRef.current &&
        cancelAnimationFrame(animationRequestRef.current);
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  const getInterpolatedDiff = (x: number) =>
    (160 / (4 * Math.pow(x, 2) - 780 * x + 44425)) * 200;

  const onMouseLeaveHandler = React.useCallback(() => {
    isMouseOverPic.current = false;
    if (!profilePicRef.current) {
      return;
    }
    const boundingRect = profilePicRef.current.getBoundingClientRect(),
      width = boundingRect.width,
      height = boundingRect.height;
    const rDiff = (155 - trailerRadius) / speed,
      xDiff = (width / 2 - trailerX) / speed,
      yDiff = (height / 2 - trailerY) / speed;
    const step = () => {
      if (isMouseOverPic.current) {
        return;
      }
      setTrailerRadius((prev) => {
        if (prev + rDiff >= 155) {
          animationRequestRef.current &&
            cancelAnimationFrame(animationRequestRef.current);
          setTrailerX(155);
          setTrailerY(155);
          return 155;
        }
        return prev + rDiff;
      });
      setTrailerX((prev) => prev + xDiff);
      setTrailerY((prev) => prev + yDiff);
      animationRequestRef.current = requestAnimationFrame(step);
    };
    animationRequestRef.current = requestAnimationFrame(step);
  }, [trailerRadius, trailerX, trailerY]);

  const onMouseMoveHandler = () => {
    if (isMouseOverPic.current) {
      return;
    }
    isMouseOverPic.current = true;
    const step = () => {
      if (!isMouseOverPic.current) {
        return;
      }
      setTrailerRadius((prev) => {
        const rDiff = getInterpolatedDiff(prev) * -1;
        if (prev + rDiff <= 40) {
          animationRequestRef.current &&
            cancelAnimationFrame(animationRequestRef.current);
          return 40;
        }
        return prev + rDiff;
      });
      animationRequestRef.current = requestAnimationFrame(step);
    };
    animationRequestRef.current = requestAnimationFrame(step);
  };
  // Check every 3 seconds if isMouseOverPic is still true, if not, call onMouseLeaveHandler
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOverPic.current) {
        onMouseLeaveHandler();
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [onMouseLeaveHandler]);
  const [showAscii, setShowAscii] = React.useState(false);
  const [showPointer, setShowPointer] = React.useState(false);
  const [hasBeenPressed, setHasBeenPressed] = React.useState(false);
  React.useEffect(() => {
    if (showAscii) {
      setHasBeenPressed(true);
    }
  }, [showAscii]);
  React.useEffect(() => {
    setShowPointer(true);
    setTimeout(() => {
      setShowPointer(false);
    }, 2000);
  }, []);
  React.useEffect(() => {
    if (hasBeenPressed) {
      return;
    }
    const interval = setInterval(() => {
      setShowPointer(true);
      setTimeout(() => {
        setShowPointer(false);
      }, 2000);
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, [hasBeenPressed, setHasBeenPressed]);
  const toggleAscii = () => setShowAscii(!showAscii);
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 300 300"
        className={`${lora.className} pointer-events-none absolute -left-3 -top-3 z-10 -rotate-[70deg] select-none text-primary`}
        width={150}
        height={150}
      >
        <path
          id="SunCatcherStudio"
          fill="none"
          stroke="none"
          d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
        />
        <text fontSize="51" fill="currentColor">
          <textPath xlinkHref="#SunCatcherStudio" startOffset="0">
            • • • • • • • • • • • • •
          </textPath>
        </text>
      </svg>
      <Image
        className={clsx(
          'pointer-events-none absolute -bottom-2 -left-2 z-40 rotate-[30deg] transition-opacity duration-500 ease-in-out',
          { 'opacity-0': !showPointer },
        )}
        src="/click.gif"
        width={120}
        height={120}
        alt="click"
      />
      <div className="relative max-h-[310px] min-h-[310px] min-w-[310px] max-w-[310px] overflow-hidden rounded-full bg-[rgb(var(--color-border)/0.25)] default-border">
        <pre
          ref={profilePicAsciiRef}
          className="absolute text-ascii text-[rgb(var(--color-text)/0.5)]"
        ></pre>
        <button
          onClick={toggleAscii}
          className={clsx(
            'absolute rounded-full animation hover:opacity-100 active:opacity-30',
            {
              'opacity-0': showAscii,
            },
          )}
        >
          <Image
            ref={profilePicRef}
            src="/profile-pic-base.png"
            id="profile-pic"
            width={310}
            height={310}
            alt="profile-pic"
            onMouseLeave={onMouseLeaveHandler}
            onMouseMove={onMouseMoveHandler}
          />
          <svg width="0" height="0">
            <defs>
              <clipPath id="profile-pic-clip-path">
                <circle cx={trailerX} cy={trailerY} r={trailerRadius} />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
