'use client';

import { useDemo } from './DemoDialog';

export default function Enquire() {
  const openDemo = useDemo();

  return (
    <section className="section enquire-section" id="enquire">
      <div className="wrap">
        <div className="enquire">
          <div>
            <div className="kicker gold">Private walkthrough</div>
            <h2>Book a BeautyBox demo.</h2>
            <p className="intro">
              Share a few details and pick a live walkthrough slot. The note goes to the same Leaf Water desk that takes BeautyPod demos.
            </p>
          </div>
          <div className="enquire-actions">
            <button className="btn" type="button" onClick={openDemo}>Open the enquiry</button>
          </div>
        </div>
      </div>
    </section>
  );
}
