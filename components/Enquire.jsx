'use client';

import { useState } from 'react';
import { interests } from '../lib/content';

export default function Enquire() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `BeautyBox enquiry — ${data.get('interest')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company')}`,
      `Email: ${data.get('email')}`,
      `Interest: ${data.get('interest')}`,
      '',
      data.get('note') || ''
    ].join('\n');
    setSent(true);
    window.location.href = `mailto:hello@beautypod.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="section enquire-section" id="enquire">
      <div className="wrap">
        <div className="enquire">
          <div>
            <div className="kicker gold">Partnerships</div>
            <h2>Bring the cabinet into the room.</h2>
            <p className="intro">
              Tell us whether you want to place a Mini BeautyPOD, host one, or put a skincare brand on its shelves. We reply from Leaf Water.
            </p>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <label className="field">
              <span>Name</span>
              <input name="name" required autoComplete="name" />
            </label>
            <label className="field">
              <span>Company</span>
              <input name="company" required autoComplete="organization" />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label className="field">
              <span>Interest</span>
              <select name="interest" required defaultValue={interests[0]}>
                {interests.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="field full">
              <span>Note</span>
              <textarea name="note" placeholder="City, number of sites, or the brands you have in mind." />
            </label>
            <button className="btn" type="submit">Send the enquiry</button>
            {sent ? (
              <p className="form-note">Your mail app will open with this note addressed to hello@beautypod.in.</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
