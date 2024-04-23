'use client';

import Image from 'next/image';
import React from 'react';

import { lora } from './lora';

export const ProfilePic = () => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 281 296"
        className={`${lora.className} pointer-events-none absolute -left-5 -top-5 z-10 animate-spin-slow select-none text-primary`}
        width={150}
        height={150}
      >
        <path
          id="SunCatcherStudio"
          fill="none"
          stroke="none"
          d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
        />
        <text fontSize="53" fill="currentColor">
          <textPath xlinkHref="#SunCatcherStudio" startOffset="0">
            • • • • • • • • • • • • • • • • • • •
          </textPath>
        </text>
      </svg>
      <Image
        className="max-h-[310px] min-h-[310px] min-w-[310px] max-w-[310px] overflow-hidden rounded-full bg-[rgb(var(--color-border)/0.25)] default-border"
        src="/profile-pic-base.jpg"
        width={310}
        height={310}
        alt="profile-pic"
      />
    </div>
  );
};
