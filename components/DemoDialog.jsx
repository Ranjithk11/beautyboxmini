'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
  demoMail,
  interests,
  locationCounts,
  timelines,
  walkthroughSlots
} from '../lib/content';

const DemoContext = createContext(null);

export function useDemo() {
  return useContext(DemoContext);
}

const emptyForm = {
  name: '',
  company: '',
  designation: '',
  phone: '',
  email: '',
  interests: [],
  locations: '1',
  timeline: '1–3 months',
  slot: 'Weekday morning'
};

export default function DemoDialog({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <DemoContext.Provider value={() => setOpen(true)}>
      {children}
      {open ? <DemoModal onClose={() => setOpen(false)} /> : null}
    </DemoContext.Provider>
  );
}

function DemoModal({ onClose }) {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  function setField(name, value) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function toggleInterest(item) {
    setForm((current) => {
      const has = current.interests.includes(item);
      return {
        ...current,
        interests: has ? current.interests.filter((entry) => entry !== item) : [...current.interests, item]
      };
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (form.interests.length === 0) return;
    const subject = 'BeautyBox Demo Request';
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Designation: ${form.designation}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Interested in: ${form.interests.join(', ')}`,
      `Number of locations: ${form.locations}`,
      `Expected timeline: ${form.timeline}`,
      `Walkthrough slot: ${form.slot}`
    ].join('\n');
    setSent(true);
    window.location.href = `mailto:${demoMail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="demo-backdrop" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="demo-card" role="dialog" aria-modal="true" aria-labelledby="demo-title">
        <header className="demo-head">
          <p className="demo-kicker">Private walkthrough</p>
          <h2 id="demo-title">Book a BeautyBox Demo</h2>
          <p>Share a few details and pick a live walkthrough slot. Your enquiry goes to the same Leaf Water desk as BeautyPod.</p>
          <button type="button" className="demo-close" aria-label="Close" onClick={onClose}>×</button>
        </header>
        {sent ? (
          <div className="demo-success">
            <h3>The request is ready.</h3>
            <p>Your mail app opened a BeautyBox demo note to {demoMail}. Send that message and the team has the walkthrough details.</p>
            <button type="button" className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form className="demo-form" onSubmit={onSubmit}>
            <div className="demo-grid">
              <label className="demo-field">
                <span>Name *</span>
                <input required placeholder="Enter your name" autoComplete="name" value={form.name} onChange={(event) => setField('name', event.target.value)} />
              </label>
              <label className="demo-field">
                <span>Company *</span>
                <input required placeholder="Enter your company" autoComplete="organization" value={form.company} onChange={(event) => setField('company', event.target.value)} />
              </label>
              <label className="demo-field">
                <span>Designation *</span>
                <input required placeholder="Enter your designation" autoComplete="organization-title" value={form.designation} onChange={(event) => setField('designation', event.target.value)} />
              </label>
              <label className="demo-field">
                <span>Phone *</span>
                <input required type="tel" placeholder="Enter your phone number" autoComplete="tel" value={form.phone} onChange={(event) => setField('phone', event.target.value)} />
              </label>
              <label className="demo-field full">
                <span>Email *</span>
                <input required type="email" placeholder="Enter your email" autoComplete="email" value={form.email} onChange={(event) => setField('email', event.target.value)} />
              </label>
            </div>

            <fieldset className="demo-choice">
              <legend>Interested in</legend>
              <div className="demo-pills">
                {interests.map((item) => {
                  const active = form.interests.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      className={active ? 'demo-pill on' : 'demo-pill'}
                      aria-pressed={active}
                      onClick={() => toggleInterest(item)}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              {form.interests.length === 0 ? <p className="demo-hint">Choose at least one.</p> : null}
            </fieldset>

            <fieldset className="demo-choice">
              <legend>Number of locations</legend>
              <div className="demo-radios">
                {locationCounts.map((item) => (
                  <label key={item}>
                    <input type="radio" name="locations" checked={form.locations === item} onChange={() => setField('locations', item)} />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="demo-choice">
              <legend>Expected timeline</legend>
              <div className="demo-radios">
                {timelines.map((item) => (
                  <label key={item}>
                    <input type="radio" name="timeline" checked={form.timeline === item} onChange={() => setField('timeline', item)} />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="demo-choice">
              <legend>Walkthrough slot</legend>
              <div className="demo-radios">
                {walkthroughSlots.map((item) => (
                  <label key={item}>
                    <input type="radio" name="slot" checked={form.slot === item} onChange={() => setField('slot', item)} />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <button className="btn btn-primary demo-submit" type="submit">Request walkthrough</button>
          </form>
        )}
      </div>
    </div>
  );
}
