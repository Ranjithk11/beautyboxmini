'use client';

import { brands, offers } from '../lib/content';
import { useDemo } from './DemoDialog';

export default function Wholesale() {
  const openDemo = useDemo();

  return (
    <section className="section supply" id="supply">
      <div className="wrap">
        <div className="kicker reveal">Supply</div>
        <h2 className="reveal">The machine and the products.<br />Or the products alone.</h2>
        <p className="intro reveal">
          BeautyBox can be ordered as the cabinet stocked with these brands, or as the products on their own.
        </p>
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className="offer-card reveal" key={offer.id}>
              <span>{offer.label}</span>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
              <button className="btn btn-primary" type="button" onClick={() => openDemo(offer.title)}>
                Enquire
              </button>
            </article>
          ))}
        </div>
        <div className="brand-block">
          <div className="kicker reveal">The brands</div>
          <h3 className="reveal">What we send.</h3>
          <ul className="brand-list">
            {brands.map((brand) => (
              <li className="brand-card reveal" key={brand.name}>
                <img src={brand.src} alt={brand.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
