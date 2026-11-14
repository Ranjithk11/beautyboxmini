'use client';

import { useState } from 'react';
import Logo from './Logo';
import { navLinks } from '../lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={open ? 'header nav-open' : 'header'}>
      <div className="header-inner wrap">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#enquire" onClick={() => setOpen(false)}>Enquire</a>
        </nav>
        <a className="btn btn-primary desk" href="#enquire">Enquire</a>
        <button
          className="menu-btn"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
