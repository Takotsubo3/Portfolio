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
          <div
            className="lang-option"
            style={{ display: 'flex', alignItems: 'center' }}
          >
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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
