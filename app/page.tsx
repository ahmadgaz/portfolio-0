'use client';

import clsx from 'clsx';
import { Lora } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CubeTransparentIcon, SparklesIcon } from '@heroicons/react/24/solid';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '400'],
});

export default function Page() {
  const [showAscii, setShowAscii] = React.useState(true);
  const toggleAscii = () => setShowAscii(!showAscii);
  return (
    <main className="relative mx-auto flex flex-col gap-[16px] px-[24px] py-[64px] max-width">
      <section className="flex items-center gap-[48px] max-lg:flex-col-reverse">
        <div className="flex flex-1 flex-col gap-[16px]">
          <h3 className="flex items-center gap-[6px] text-subtitle text-neutral max-lg:justify-center max-lg:text-center">
            AHMAD GAZALI <SparklesIcon width={14} height={14} />
          </h3>
          <h1 className="text-title max-lg:text-center">
            UX/UI Designer &amp; Software Developer
          </h1>
          <p className="text-neutral max-lg:text-center">
            <em className={`${lora.className} italic`}>
              Crafting pixel perfect experiences.
            </em>{' '}
            Integrating magical details and applying a love for polished design
            to bring out the best in brands and products.
          </p>
          <div className="flex flex-wrap gap-[6px] py-[8px] max-lg:justify-center">
            <button className="flex w-fit items-center gap-[6px] rounded-lg px-[16px] py-[10px] text-button animation default-border hover:border-[rgb(var(--color-neutral)/0.2)]">
              <CubeTransparentIcon width={20} height={20} /> Experience
            </button>
            <button className="w-fit rounded-lg px-[16px] py-[10px] text-button animation hover:text-neutral">
              Technical Skills
            </button>
          </div>
          <Link href="/" className="text-good animation hover:opacity-50">
            <strong className="flex items-center gap-[10px] text-button max-lg:justify-center">
              Available for Hire{' '}
              <span className="relative h-[12px] w-[12px]">
                <span className="absolute h-[12px] w-[12px] animate-ping rounded-md bg-good default-border" />
                <span className="absolute h-[12px] w-[12px] rounded-md bg-good default-border" />
              </span>
            </strong>
          </Link>
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
            className={`${lora.className} pointer-events-none absolute -left-3 -top-3 z-10 -rotate-[70deg] text-primary`}
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
          <div className="relative max-h-[310px] min-h-[310px] min-w-[310px] max-w-[310px] overflow-hidden rounded-full bg-[rgb(var(--color-border)/0.25)] default-border">
            <pre
              className="absolute text-ascii text-[rgb(var(--color-text)/0.5)]"
              id="profile-pic-ascii"
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
                src="/profile-pic-base.png"
                className="profile-pic"
                width={310}
                height={310}
                alt="profile-pic"
              />
              <svg width="0" height="0">
                <defs>
                  <clipPath id="profile-pic-clip-path">
                    <circle
                      id="profile-pic-trailer"
                      cx="155"
                      cy="155"
                      r="155"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <hr className="my-[56px] border border-border" />
      <section className="flex flex-col gap-[14px]">
        <h1 className="text-title">Experience &amp; Projects</h1>
        <p className="text-neutral">
          Elegant and functional web and mobile applications, custom-designed
          user interfaces, and visually appealing design systems tailored for
          individual and/or business needs.
        </p>
        <div className="flex h-fit max-w-full flex-col flex-wrap items-stretch gap-[16px] pt-[16px] lg:h-[1700px]">
          <Link
            target="_blank"
            href="https://bookbunny.net/"
            className="relative flex min-h-[700px] flex-1 flex-col justify-end gap-[8px] overflow-hidden rounded-lg bg-[rgb(255,254,203)] p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper lg:max-w-[506px]"
          >
            <Image
              className="absolute -left-20 bottom-24"
              src="/experience-assets/bookbunny-preview.png"
              width={500}
              height={600}
              alt="Bookbunny Preview"
            />
            <p className="text-subtitle text-[rgb(var(--color-neutral)/0.75)]">
              BOOKBUNNY
            </p>
            <h3 className="text-title font-extrabold">
              Event Scheduling Platform
            </h3>
          </Link>
          <Link
            target="_blank"
            href="https://vr-club-seven.vercel.app/"
            className="relative flex min-h-[600px] flex-1 flex-col gap-[8px]  overflow-hidden rounded-lg bg-[#260B1E] p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper lg:max-w-[506px]"
          >
            <Image
              className="absolute right-0 top-0"
              src="/experience-assets/vr-club-preview.png"
              width={500}
              height={600}
              alt="Virtual Reality Club Preview"
            />
            <p className="text-subtitle text-[rgb(var(--color-neutral)/0.75)]">
              VIRTUAL REALITY CLUB
            </p>
            <h3 className="text-title font-extrabold text-background">
              University Club Website with Integrated CMS
            </h3>
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ahmad-gazali/#:~:text=met%20him%20going.-,I%20highly%20recommend%20Ahmad%20to%20companies%20looking%20for%20an%20early%20career%20professional%20who%20can%20grow%20into%20a%20strong%20technical%20leader.,-I%20had%20the"
            className="relative flex flex-col gap-[28px]  overflow-hidden rounded-lg p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper lg:max-w-[506px]"
          >
            <h3 className="text-center text-body italic">
              &quot;I highly recommend Ahmad to companies looking for an early
              career professional who can grow into a strong technical
              leader.&quot;
            </h3>
            <div className="flex items-center justify-center gap-[16px]">
              <Image
                className="rounded-full default-border"
                src="/experience-assets/duncan.jpeg"
                width={60}
                height={60}
                alt="Duncan Cowell"
              />
              <div>
                <p className="text-heading">Duncan Cowell</p>
                <p className="text-subheading text-neutral">
                  Program Manager @ IBM
                </p>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href="/"
            className="relative flex min-h-[600px] flex-1  flex-col gap-[8px] overflow-hidden rounded-lg p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper lg:max-w-[506px]"
          >
            <Image
              className="absolute -top-10 right-0"
              src="/experience-assets/course-scheduler-preview.png"
              width={500}
              height={600}
              alt="ACM-CS@SJSU Preview"
            />
            <p className="text-subtitle text-[rgb(var(--color-neutral)/0.75)]">
              ACM-CS@SJSU
            </p>
            <h3 className="text-title font-extrabold">
              Course Scheduler &amp; Professor Rating Platform
            </h3>
          </Link>
          <Link
            target="_blank"
            href="/"
            className="relative flex min-h-[700px] flex-1 flex-col gap-[8px] overflow-hidden rounded-lg bg-[#F9F2DC] p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper lg:max-w-[506px]"
          >
            <Image
              className="absolute right-0 top-20"
              src="/experience-assets/eatin-preview.png"
              width={500}
              height={600}
              alt="Eatin Preview"
            />
            <p className="text-subtitle text-[rgb(var(--color-neutral)/0.75)]">
              EATIN
            </p>
            <h3 className="text-title font-extrabold">
              Recipe Search &amp; Meal Planning App
            </h3>
          </Link>
          <Link
            target="_blank"
            href="https://school-cmpe132-project-implementation.vercel.app/"
            className="relative flex min-h-[300px] flex-1 flex-col  gap-[8px] overflow-hidden rounded-lg p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper lg:max-w-[506px]"
          >
            <Image
              className="absolute -top-24 right-0"
              src="/experience-assets/sjsul-preview.png"
              width={500}
              height={600}
              alt="SJSUL Preview"
            />
            <p className="text-subtitle text-[rgb(var(--color-neutral)/0.75)]">
              SJSUL
            </p>
            <h3 className="text-title font-extrabold">
              Library Management System
            </h3>
          </Link>
        </div>
      </section>
      <hr className="my-[56px] border border-border" />
      <section className="flex flex-col gap-[14px]">
        <h1 className="text-center text-title">Technical Skills</h1>
      </section>
      <hr className="my-[56px] border border-border" />
      <section className="flex flex-col gap-[14px]">
        <h1 className="text-center text-title">Let&apos;s Connect!</h1>
        <p className="text-center text-neutral"></p>
      </section>
    </main>
  );
}
