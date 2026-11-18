'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
  interests,
  locationCounts,
  offers,
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
  offer: '',
  interests: [],
  locations: '1',
  timeline: '1–3 months',
  slot: 'Weekday morning'
};

export default function DemoDialog({ children }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState('');

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
    <DemoContext.Provider value={(offer) => { setPreset(offer || ''); setOpen(true); }}>
      {children}
      {open ? <DemoModal initialOffer={preset} onClose={() => setOpen(false)} /> : null}
    </DemoContext.Provider>
  );
}

function DemoModal({ onClose, initialOffer }) {
  const [form, setForm] = useState({ ...emptyForm, offer: initialOffer || '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

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

  async function onSubmit(event) {
    event.preventDefault();
    if (!form.offer || sending) return;
    setSending(true);
    setFailed(false);
    const payload = {
      event: 'beautybox_enquiry',
      source: 'BeautyBox',
      requested_at: new Date().toISOString(),
      offer: form.offer,
      name: form.name,
      company: form.company,
      designation: form.designation,
      phone: form.phone,
      email: form.email,
      interests: form.interests,
      locations: form.locations,
      timeline: form.timeline,
      slot: form.slot,
      user: {
        name: form.name,
        email: form.email,
        phone: form.phone
      }
    };
    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Enquiry was not accepted');
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="demo-backdrop" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="demo-card" role="dialog" aria-modal="true" aria-labelledby="demo-title">
        <header className="demo-head">
          <p className="demo-kicker">Private walkthrough</p>
          <h2 id="demo-title">Book a BeautyBox Demo</h2>
          <p>Say whether you want the machine and the products, or the products alone. The enquiry goes to the Leaf Water desk.</p>
          <button type="button" className="demo-close" aria-label="Close" onClick={onClose}>×</button>
        </header>
        {sent ? (
          <div className="demo-success">
            <h3>The enquiry is with the team.</h3>
            <p>We have the details for {form.offer}. Someone from the Leaf Water desk will come back to you.</p>
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
              <legend>What do you need? *</legend>
              <div className="demo-radios">
                {offers.map((item) => (
                  <label key={item.id}>
                    <input type="radio" name="offer" required checked={form.offer === item.title} onChange={() => setField('offer', item.title)} />
                    {item.title}
                  </label>
                ))}
              </div>
            </fieldset>

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
              {failed ? <p className="demo-hint">The enquiry did not go through. Please try again.</p> : null}
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

            <button className="btn btn-primary demo-submit" type="submit" disabled={sending}>
              {sending ? 'Sending…' : 'Send enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
