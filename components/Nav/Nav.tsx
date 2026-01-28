'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Select from 'react-select';

const languages = [
  {
    value: 'english',
    label: 'English',
    image: '/united-kingdom.png',
  },
  {
    value: 'french',
    label: 'French',
    image: '/france.png',
  },
];

export default function Nav() {
  return (
    <nav className="nav-bar">
      <Select
        className="lang-select"
        options={languages}
        formatOptionLabel={(option) => (
          <div className='lang-option' style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={option.image}
              alt={option.label}
              width={24}
              height={24}
              style={{ marginRight: 8 }}
            />
            <span>{option.label}</span>
          </div>
        )}
      />
      <ul className="menu">
        <Link href="">
          <li>Home</li>
        </Link>
        <Link href="">
          <li>About Me</li>
        </Link>
        <Link href="">
          <li>Projects</li>
        </Link>
        <Link href="">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
