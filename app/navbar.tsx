'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
type NavbarProps = {
  projectsRef: React.RefObject<HTMLHRElement>;
  skillsRef: React.RefObject<HTMLHRElement>;
  contactRef: React.RefObject<HTMLHRElement>;
};

const Navbar: React.FC<NavbarProps> = ({
  projectsRef,
  skillsRef,
  contactRef,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <header
      className={clsx(
        'fixed z-50 w-[100dvw] border-border backdrop-blur-lg animation',
        {
          'bg-[rgb(var(--color-background)/0.75)]': !showMenu,
          'bg-background': showMenu,
        },
      )}
    >
      <nav className="mx-auto box-border flex h-[73px] items-center justify-between px-[32px] animation max-width">
        {/* Logo */}
        <Link
          className="flex items-center gap-[10px] text-text animation hover:text-neutral lg:pr-[32px]"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 612 612"
            width={30}
            height={30}
          >
            <circle
              className="cls-1"
              cx="308.43"
              cy="267.34"
              r="70.51"
              fill="currentColor"
            />
            <g>
              <path
                className="cls-1"
                d="M163.85,297.77H38.95c-16.8,0-30.42-13.62-30.42-30.42s13.62-30.42,30.42-30.42h124.9c16.8,0,30.42,13.62,30.42,30.42s-13.62,30.42-30.42,30.42Z"
                fill="currentColor"
              />
              <path
                className="cls-1"
                d="M573.05,297.77h-124.9c-16.8,0-30.42-13.62-30.42-30.42s13.62-30.42,30.42-30.42h124.9c16.8,0,30.42,13.62,30.42,30.42s-13.62,30.42-30.42,30.42Z"
                fill="currentColor"
              />
            </g>
            <g>
              <g>
                <line
                  className="cls-1"
                  x1="78.31"
                  y1="120.43"
                  x2="186.48"
                  y2="182.88"
                  fill="currentColor"
                />
                <path
                  className="cls-1"
                  d="M186.45,213.31c-5.16,0-10.39-1.31-15.18-4.08l-108.17-62.45c-14.55-8.4-19.54-27.01-11.14-41.56,8.4-14.55,27.01-19.54,41.56-11.14l108.17,62.45c14.55,8.4,19.54,27.01,11.14,41.56-5.63,9.76-15.86,15.22-26.38,15.22Z"
                  fill="currentColor"
                />
              </g>
              <g>
                <line
                  className="cls-1"
                  x1="425.52"
                  y1="351.8"
                  x2="533.69"
                  y2="414.25"
                  fill="currentColor"
                />
                <path
                  className="cls-1"
                  d="M533.66,444.68c-5.16,0-10.39-1.31-15.18-4.08l-108.17-62.45c-14.55-8.4-19.54-27.01-11.14-41.56,8.4-14.55,27.01-19.54,41.56-11.14l108.17,62.45c14.55,8.4,19.54,27.01,11.14,41.56-5.64,9.76-15.86,15.22-26.38,15.22Z"
                  fill="currentColor"
                />
              </g>
            </g>
            <path
              className="cls-1"
              d="M249.64,406.62l-148.73-.45c-16.8-.05-30.38-13.71-30.33-30.52.05-16.77,13.66-30.33,30.42-30.33h.09l116.6.35,65.67-95.56c9.52-13.85,28.46-17.36,42.31-7.84,13.85,9.52,17.36,28.46,7.84,42.31l-83.87,122.04Z"
              fill="currentColor"
            />
            <path
              className="cls-1"
              d="M308.15,522c-64.43,0-116.85-52.42-116.85-116.86,0-16.8,13.62-30.42,30.42-30.42s30.42,13.62,30.42,30.42c0,30.88,25.12,56.01,56.01,56.01,16.8,0,30.42,13.62,30.42,30.42s-13.62,30.42-30.42,30.42Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-logo max-lg:hidden">gaza.li</span>
        </Link>

        <button
          className="animation hover:text-neutral lg:hidden"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <XMarkIcon width={20} height={20} />
          ) : (
            <Bars3Icon width={20} height={20} />
          )}
        </button>

        <section
          className={clsx(
            'max-lg:transition-[position, opacity, visibility] flex items-center gap-[16px] text-button max-lg:fixed  max-lg:left-0 max-lg:top-[73px] max-lg:h-[calc(100vh_-_73px)] max-lg:w-full max-lg:flex-col-reverse max-lg:gap-[16px] max-lg:overflow-y-scroll max-lg:bg-background max-lg:p-[16px] max-lg:duration-500 max-lg:ease-out lg:pl-[16px]',
            {
              'max-lg:translate-x-0 max-lg:opacity-100': showMenu,
              'max-lg:invisible max-lg:translate-x-10 max-lg:opacity-0':
                !showMenu,
            },
          )}
        >
          <section className="flex w-full flex-col items-center gap-[2px] border-t-2 border-t-border p-[32px] text-body lg:hidden">
            <p className="text-center text-heading">Ahmad Gazali</p>
            <p className="pb-[16px] text-center text-subheading text-neutral">
              Software Developer &amp; UX/UI Designer
            </p>
            <Link
              href="tel:+16613332888"
              className="flex items-center gap-[10px] text-center text-secondary animation hover:opacity-50"
            >
              <PhoneIcon width={20} height={20} /> +1 (661) 333-2888
            </Link>
            <Link
              href="mailto:contact@gaza.li"
              className="flex items-center gap-[10px] text-center text-secondary animation hover:opacity-50"
            >
              <EnvelopeIcon width={20} height={20} /> contact@gaza.li
            </Link>
            <Link
              href="https://www.linkedin.com/in/ahmad-gazali/"
              target="_blank"
              className="flex items-center gap-[10px] pb-[16px] text-center text-secondary animation hover:opacity-50"
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
            <strong className="flex w-fit items-center gap-[9px] text-center text-button text-good animation max-lg:justify-center">
              Available for Hire{' '}
              <span className="relative h-[11px] w-[12px]">
                <span className="absolute h-[11px] w-[12px] animate-ping rounded-md bg-good default-border" />
                <span className="absolute h-[11px] w-[12px] rounded-md bg-good default-border" />
              </span>
            </strong>
          </section>
          <ul className="flex gap-[24px] max-lg:flex-1 max-lg:flex-col max-lg:items-center max-lg:gap-[32px] max-lg:pb-[32px]">
            <li>
              <button
                onClick={() => {
                  projectsRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                  toggleMenu();
                }}
                className="cursor-pointer text-text animation hover:text-neutral"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  skillsRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                  toggleMenu();
                }}
                className="cursor-pointer text-text animation hover:text-neutral"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  contactRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                  toggleMenu();
                }}
                className="cursor-pointer text-text animation hover:text-neutral"
              >
                Contact
              </button>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
