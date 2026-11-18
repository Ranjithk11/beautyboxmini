'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import { useDemo } from './DemoDialog';
import { navLinks } from '../lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const openDemo = useDemo();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function enquire(event) {
    event.preventDefault();
    setOpen(false);
    openDemo();
  }

  return (
    <header className={['header', solid ? 'solid' : '', open ? 'nav-open' : ''].filter(Boolean).join(' ')}>
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
          <a className="btn btn-primary" href="#enquire" onClick={enquire}>Enquire</a>
        </nav>
        <a className="btn btn-primary desk" href="#enquire" onClick={enquire}>Enquire</a>
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
