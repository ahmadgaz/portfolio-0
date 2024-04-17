'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { CubeTransparentIcon, SparklesIcon } from '@heroicons/react/24/solid';

import { lora } from './lora';
import Navbar from './navbar';
import { ProfilePic } from './profile-pic';
import { Animation } from './skills/animation';
import { Design } from './skills/design';
import { Frontend } from './skills/frontend';
import { Responsive } from './skills/responsive';

export default function Page() {
  const projectsRef = React.useRef<HTMLHRElement>(null);
  const skillsRef = React.useRef<HTMLHRElement>(null);
  const contactRef = React.useRef<HTMLHRElement>(null);
  return (
    <>
      <Navbar
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <main className="relative pt-[75px]">
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
                Integrating magical details and applying a love for polished
                design to bring out the best in brands and products.
              </p>
              <div className="flex flex-wrap gap-[6px] py-[8px] max-lg:justify-center">
                <button
                  onClick={() => {
                    projectsRef.current?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                  className="flex w-fit items-center gap-[6px] rounded-lg px-[16px] py-[10px] text-button animation default-border hover:border-[rgb(var(--color-neutral)/0.2)]"
                >
                  <CubeTransparentIcon width={20} height={20} /> Experience
                </button>
                <button
                  onClick={() => {
                    skillsRef.current?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                  className="w-fit rounded-lg px-[16px] py-[10px] text-button animation hover:text-neutral"
                >
                  Technical Skills
                </button>
              </div>
              <div className="flex max-lg:justify-center">
                <button
                  onClick={() => {
                    contactRef.current?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                  className="w-fit text-good animation hover:opacity-50"
                >
                  <strong className="flex items-center gap-[3px] text-button max-lg:justify-center">
                    Available for Hire{' '}
                    <span className="relative h-[11px] w-[12px]">
                      <span className="absolute h-[11px] w-[12px] animate-ping rounded-md bg-good default-border" />
                      <span className="absolute h-[11px] w-[12px] rounded-md bg-good default-border" />
                    </span>
                  </strong>
                </button>
              </div>
            </div>
            <ProfilePic />
          </section>
          <section className="flex justify-center gap-[16px] pt-[64px]">
            <div className="flex flex-col gap-[6px]">
              <p className="text-center text-neutral">
                Need a designer or developer? Send me a message!
              </p>
              <Link
                href="mailto:gazali.contact@gmail.com"
                className="flex items-center justify-center gap-[10px] text-center text-secondary animation hover:opacity-50"
              >
                <EnvelopeIcon width={20} height={20} /> gazali.contact@gmail.com
              </Link>
              <Link
                href="tel:+16613332888"
                className="flex items-center justify-center gap-[10px] text-center text-secondary animation hover:opacity-50"
              >
                <PhoneIcon width={20} height={20} /> +1 (661) 333-2888
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahmad-gazali/"
                className="flex items-center justify-center gap-[10px] pb-[16px] text-secondary animation hover:opacity-50"
              >
                <svg
                  className="mr-[4px] h-[16px] w-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 28"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>{' '}
                LinkedIn
              </Link>
            </div>
          </section>
          <hr ref={projectsRef} className="my-[56px] border border-border" />
          <section className="flex flex-col gap-[40px]">
            <div className="mx-auto flex max-w-[700px] flex-col gap-[14px]">
              <h3 className="flex items-center gap-[6px] text-subtitle text-neutral">
                EXPERIENCE &amp; PROJECTS
              </h3>
              <h1 className="text-title">
                User-Centric Design &amp; Development.
              </h1>
              <p className="text-neutral">
                <em className={`${lora.className} italic`}>
                  Elegant web and mobile applications.
                </em>{' '}
                Custom-designed user interfaces and visually appealing design
                systems tailored for individual and/or business needs.
              </p>
            </div>
            <section
              id="projects"
              className="flex h-fit max-w-full flex-col flex-wrap items-stretch gap-[16px] pt-[16px] lg:h-[1700px]"
            >
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
                  &quot;I highly recommend Ahmad to companies looking for an
                  early career professional who can grow into a strong technical
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
            </section>
          </section>
          <hr ref={skillsRef} className="my-[56px] border border-border" />
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
            <section className="flex max-w-full flex-wrap items-stretch gap-[16px] pt-[16px]">
              <Frontend />
              <Responsive />
              <Animation />
              <Design />
            </section>

            <div className="mx-auto flex max-w-[700px] flex-col gap-[14px] pt-[32px]">
              <h1 className="text-title">My Toolkit.</h1>
              <p className="text-neutral">
                These are the everyday tools and technologies I use to bring
                ideas to life. I have extensive knowledge in HMTL, CSS,
                JavaScript (ES6), Typescript, React, Next.JS 14, Node.JS,
                MongoDB, Firebase, Supabase, Figma, and Adobe CC. I&apos;m
                always learning and experimenting with new tools, and I&apos;m
                open to trying new things! 🚀
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-[16px] pb-[28px]">
              <Image
                src="/javascript.png"
                className="h-[30px] w-[30px]"
                width={30}
                height={30}
                alt="JavaScript"
              />
              <Image
                src="/typescript.png"
                className="h-[30px] w-[30px]"
                width={30}
                height={30}
                alt="TypeScript"
              />
              <Image
                src="/react.png"
                className="h-[30px]"
                width={35}
                height={30}
                alt="React"
              />
              <Image
                src="/nextjs.png"
                className="h-[30px] w-[30px]"
                width={30}
                height={30}
                alt="Next.js"
              />
              <Image
                src="/nodejs.webp"
                className="h-[30px] w-[30px]"
                width={30}
                height={30}
                alt="Node.js"
              />
              <Image
                src="/mongodb.png"
                className="h-[30px] w-[15px]"
                width={30}
                height={30}
                alt="MongoDB"
              />
              <Image
                src="/firebase.png"
                className="h-[30px] w-[30px]"
                width={30}
                height={30}
                alt="Firebase"
              />
              <Image
                src="/supabase.png"
                className="h-[30px] w-[23px]"
                width={30}
                height={30}
                alt="Supabase"
              />
              <Image
                src="/figma.png"
                className="h-[30px] w-[20px]"
                width={30}
                height={30}
                alt="Figma"
              />
              <Image
                src="/cc.svg"
                className="h-[30px] w-[30px]"
                width={30}
                height={30}
                alt="Adobe CC"
              />
            </div>
          </section>
          <hr ref={contactRef} className="my-[56px] border border-border" />
          <section className="flex flex-col items-center gap-[14px]">
            <div className="mx-auto flex max-w-[700px] flex-col gap-[14px] pb-[32px]">
              <h1 className="text-title">Let&apos;s Connect!</h1>
              <p className="text-neutral">
                If you&apos;re interested in working with a communicative
                front-end developer or just want to chat, feel free to reach
                out.
              </p>
            </div>
            <div className="relative flex w-fit items-center gap-[32px] rounded-lg bg-background p-[32px] shadow-sm animation default-border hover:border-[rgb(var(--color-border)/0.25)] hover:shadow-paper max-lg:flex-col max-lg:items-center">
              <Image
                className="rounded-full default-border"
                src="/profile-pic-base.png"
                width={200}
                height={200}
                alt="profile-pic"
              />

              <div>
                <p className="text-heading">Ahmad Gazali</p>
                <p className="pb-[16px] text-subheading text-neutral">
                  Software Developer &amp; UX/UI Designer
                </p>
                <Link
                  href="mailto:gazali.contact@gmail.com"
                  className="flex items-center gap-[10px] text-secondary animation hover:opacity-50"
                >
                  <EnvelopeIcon width={20} height={20} />{' '}
                  gazali.contact@gmail.com
                </Link>
                <Link
                  href="tel:+16613332888"
                  className="flex items-center gap-[10px] text-secondary animation hover:opacity-50"
                >
                  <PhoneIcon width={20} height={20} /> +1 (661) 333-2888
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ahmad-gazali/"
                  target="_blank"
                  className="flex items-center gap-[10px] pb-[16px] text-secondary animation hover:opacity-50"
                >
                  <svg
                    className="mr-[4px] h-[16px] w-[16px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 28"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>{' '}
                  LinkedIn
                </Link>
                <strong className="flex w-fit items-center gap-[9px] text-button text-good animation max-lg:justify-center">
                  Available for Hire{' '}
                  <span className="relative h-[11px] w-[12px]">
                    <span className="absolute h-[11px] w-[12px] animate-ping rounded-md bg-good default-border" />
                    <span className="absolute h-[11px] w-[12px] rounded-md bg-good default-border" />
                  </span>
                </strong>
              </div>
            </div>
          </section>
          <hr className="my-[56px] border border-border" />
          <section className="flex justify-between gap-[16px]">
            <p className="text-neutral">
              &copy; 2024 Ahmad Gazali. All rights reserved.
            </p>
            <section className="flex items-center gap-[16px]">
              <Link
                href="https://www.linkedin.com/in/ahmad-gazali/"
                target="_blank"
                className="text-neutral hover:opacity-75"
              >
                <svg
                  className="h-[20px] w-[20px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </Link>
              <Link
                href="/"
                target="_blank"
                className="pt-[3px] text-neutral hover:opacity-75"
              >
                <svg
                  width="27"
                  height="18"
                  viewBox="0 0 27 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.0625 17.1563c1.6562 0 3-.3907 4.0312-1.172 1.2188-.8437 1.8281-2.0624 1.8281-3.6562 0-1.0625-.2578-1.9609-.7734-2.6953-.5156-.7343-1.2734-1.2421-2.2734-1.5234 1.5-.7187 2.25-1.8594 2.25-3.4219s-.5157-2.6718-1.5469-3.328c-.875-.5626-2.125-.8438-3.75-.8438H0v16.6406h8.0625zM24.3749 3.0468V1.4063h-6.75v1.6406h6.75zM7.3594 7.2657H3.6562V3.375h3.422c1.6561 0 2.4843.625 2.4843 1.875 0 .6875-.1953 1.1953-.586 1.5235-.3906.328-.9296.4922-1.6171.4922zm13.7812 10.1718c2.875 0 4.75-1.3438 5.625-4.0312h-2.9063c-.1562.5-.4922.8906-1.0078 1.1718-.5156.2813-1.0547.422-1.6172.422-.9375 0-1.664-.2657-2.1797-.797-.5156-.5312-.7734-1.2968-.7734-2.2968h8.6719l.0468-.6094c0-1.8437-.5-3.375-1.5-4.5937-1.0937-1.2813-2.5468-1.922-4.3593-1.922-1.1875 0-2.25.2813-3.1875.8438s-1.664 1.3282-2.1797 2.2969C15.2578 8.8907 15 9.9688 15 11.1563c0 1.875.5547 3.3906 1.664 4.5468 1.1094 1.1563 2.6016 1.7344 4.4766 1.7344zm2.5312-7.5937h-5.3906c.0625-.7813.3438-1.4063.8437-1.875.5-.4688 1.1485-.7031 1.9454-.7031.7968 0 1.414.2265 1.8515.6796.4375.4532.6875 1.086.75 1.8985zm-16.125 4.5H3.6563V9.75h3.9844c1.75 0 2.625.7969 2.625 2.3906 0 1.4688-.9063 2.2032-2.7187 2.2032z"
                    fill="currentColor"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://github.com/ahmadgaz"
                target="_blank"
                className="text-neutral hover:opacity-75"
              >
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.789 22.9219c.1407.125.336.1562.586.0937 2.3437-.7812 4.2421-2.1953 5.6953-4.2422 1.453-2.0468 2.1796-4.3671 2.1796-6.9609 0-2.125-.5312-4.078-1.5937-5.8593-1.0313-1.7188-2.4531-3.0782-4.2656-4.0782s-3.7813-1.5-5.9063-1.5c-2.1562 0-4.1093.5-5.8593 1.5S2.5 4.25 1.5 6 0 9.6875 0 11.8125c0 2.5938.7344 4.914 2.2031 6.961 1.4688 2.0468 3.3906 3.4609 5.7656 4.2421.25.0625.4453.0313.586-.0937.1406-.125.2109-.2813.2109-.4688l-.0469-2.8593-.5156.0468c-.4062.0625-.7969.0782-1.1719.0469-.5312-.0625-.9843-.2031-1.3593-.4219-.4375-.25-.7344-.6093-.8907-1.078l-.1875-.375c-.125-.2813-.2812-.5313-.4687-.75-.2188-.2813-.4375-.4845-.6563-.6095l-.2343-.1875c-.1563-.125-.2266-.2422-.211-.3515.0157-.1094.1953-.164.539-.164l.3282.0468c.25.0937.4844.2031.7031.3281.3125.2188.5625.5.75.8438.4375.7812 1.0625 1.203 1.875 1.2656.5.0625 1.0157-.0313 1.5469-.2813.0937-.6875.3437-1.2187.75-1.5937-1.125-.125-1.9687-.2813-2.5312-.4688-.875-.3125-1.5313-.7968-1.9688-1.453-.5-.7813-.75-1.875-.75-3.2813 0-.5938.086-1.086.2578-1.4766.1719-.3906.4453-.8203.8203-1.289-.125-.2813-.1875-.6407-.1875-1.0782-.0625-.6875.047-1.375.3282-2.0625.2812-.0937.703-.0312 1.2656.1875.4062.1563.8594.375 1.3594.6563l.6093.4219c.9375-.2813 1.914-.422 2.9297-.422 1.0156 0 2.0078.1407 2.9766.422l.6093-.422c.5-.2812.9375-.5 1.3125-.6562.5625-.2187 1-.2812 1.3125-.1875.25.6875.3594 1.375.3282 2.0625-.0313.4375-.1094.8125-.2344 1.125.4375.4688.7344.8594.8906 1.1719.2187.4375.3281.9531.3281 1.5469 0 1.4062-.2656 2.5156-.7968 3.328-.4688.625-1.1407 1.0938-2.0157 1.4063-.5625.1875-1.4218.3438-2.578.4688.5312.4375.7968 1.1562.7968 2.1562v3.9375c0 .1875.0703.3438.211.4688zm-9.6093-5.3906c.0469.0312.086.0312.1172 0 .0937-.0625.0937-.1563 0-.2813-.0313-.0625-.0703-.1016-.1172-.1172-.0469-.0156-.1016-.0078-.164.0235-.0626.0312-.0626.125 0 .2812a1.533 1.533 0 01.164.0938zm.4453.6093c.125.125.2344.1407.3281.047.0313-.0313.039-.0782.0235-.1407a.3477.3477 0 00-.0938-.164.3477.3477 0 00-.164-.0938c-.0626-.0157-.1094-.0078-.1407.0234-.0312.0313-.0469.0781-.0469.1406s.0313.125.0938.1875zm1.0156.5365l.0625-.0208c.0625-.0313.1016-.086.1172-.1641.0156-.0781-.0547-.1406-.211-.1875-.1562-.0469-.25-.0078-.2812.1172-.0312.0312-.0234.0703.0235.1172a.6257.6257 0 00.164.1172c.0625.0312.125.0312.1875 0l-.0625.0208zm1.7969.026c.1562-.0625.2265-.1406.211-.2343-.0157-.0938-.1017-.1407-.2579-.1407-.1562.0313-.2266.0938-.211.1875.0157.0938.047.1485.0938.164.0469.0157.1016.0235.164.0235zm-.9929.1192l.0788-.002c.1719-.0156.2578-.086.2578-.211 0-.0312-.0234-.0624-.0703-.0937-.0469-.0312-.1172-.0468-.211-.0468-.1562 0-.2343.0625-.2343.1875s.086.1796.2578.164l-.0788.002z"
                    fill="currentColor"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </Link>
            </section>
          </section>
        </main>
      </main>
      <Script src="/profile-pic-ascii.js" />
    </>
  );
}
