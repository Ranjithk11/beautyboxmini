'use client';

import { useDemo } from './DemoDialog';

export default function Enquire() {
  const openDemo = useDemo();

  return (
    <section className="section enquire-section" id="enquire">
      <div className="wrap">
        <div className="enquire reveal">
          <div>
            <div className="kicker gold">Private walkthrough</div>
            <h2>Ask for the machine, the products, or both.</h2>
            <p className="intro">
              Tell us which supply you want. The note goes to the same Leaf Water desk that takes BeautyBox enquiries.
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
