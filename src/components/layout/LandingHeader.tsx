import * as React from 'react';
import { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function LandingHeader() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const handleScroll = (_: Event) => {
      if (top != window.scrollY < 10) {
        setTop(window.scrollY < 10);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [top]);
  return (
    <header
      className={clsxm(
        'fixed left-0 right-0 top-0 z-50 text-white',
        !top && 'bg-black/50  backdrop-blur'
      )}
    >
      <div className='mx-auto grid h-20 max-w-screen-2xl grid-cols-[200px_1fr_200px] items-center justify-between px-10 transition-[background]'>
        <div>
          <UnstyledLink
            href='/'
            className='text-xl font-semibold hover:text-secondary'
          >
            Headen.Finance
          </UnstyledLink>
        </div>
        <div className='flex justify-center gap-12'>
          <UnstyledLink
            href='/'
            className='text-sm font-semibold hover:text-secondary'
          >
            Markets
          </UnstyledLink>
          <UnstyledLink
            href='/'
            className='text-sm font-semibold hover:text-secondary'
          >
            Governance
          </UnstyledLink>
          <UnstyledLink
            href='/'
            className='text-sm font-semibold hover:text-secondary'
          >
            Docs
          </UnstyledLink>
          <UnstyledLink
            href='/'
            className='text-sm font-semibold hover:text-secondary'
          >
            Security
          </UnstyledLink>
        </div>
        <div className='flex justify-end'>
          <UnstyledLink
            href='/app'
            className='rounded-[20px] border border-white py-2 px-4 font-semibold text-white hover:border-secondary hover:bg-transparent'
          >
            Launch App
          </UnstyledLink>
        </div>

        {/*<nav>*/}
        {/*  <ul className='flex items-center justify-between space-x-4'>*/}
        {/*    {links.map(({ href, label }) => (*/}
        {/*      <li key={`${href}${label}`}>*/}
        {/*        <UnstyledLink href={href} className='hover:text-gray-600'>*/}
        {/*          {label}*/}
        {/*        </UnstyledLink>*/}
        {/*      </li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</nav>*/}
      </div>
    </header>
  );
}