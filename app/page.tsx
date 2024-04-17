'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CubeTransparentIcon, SparklesIcon } from '@heroicons/react/24/solid';

import { lora } from './lora';
import { ProfilePic } from './profile-pic';
import { Frontend } from './skills/frontend';
import { Responsive } from './skills/responsive';

export default function Page() {
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
        <ProfilePic />
      </section>

      <hr className="my-[56px] border border-border" />
      <section className="flex flex-col gap-[40px]">
        <div className="mx-auto flex max-w-[700px] flex-col gap-[14px]">
          <h3 className="flex items-center gap-[6px] text-subtitle text-neutral">
            EXPERIENCE &amp; PROJECTS
          </h3>
          <h1 className="text-title">User-Centric Design &amp; Development.</h1>
          <p className="text-neutral">
            <em className={`${lora.className} italic`}>
              Elegant web and mobile applications.
            </em>{' '}
            Custom-designed user interfaces and visually appealing design
            systems tailored for individual and/or business needs.
          </p>
        </div>
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
      <section className="flex flex-col gap-[40px]">
        <div className="mx-auto flex max-w-[700px] flex-col gap-[14px]">
          <h3 className="flex items-center gap-[6px] text-subtitle text-neutral">
            SKILLS &amp; TOOLS
          </h3>
          <h1 className="text-title">Make Your Brand Shine.</h1>
          <p className="text-neutral">
            I help businesses and individuals stand out from the crowd with
            custom-tailored designs and development services.
          </p>
        </div>
        <div className="flex max-w-full flex-wrap items-stretch gap-[16px] pt-[16px]">
          <Frontend />
          <Responsive />
        </div>
      </section>
      <hr className="my-[56px] border border-border" />
      <section className="flex flex-col gap-[14px]">
        <h1 className="text-center text-title">Let&apos;s Connect!</h1>
        <p className="text-center text-neutral"></p>
      </section>
    </main>
  );
}
