import { places } from '../lib/content';

export default function Places() {
  return (
    <section className="section" id="places">
      <div className="wrap">
        <div className="kicker">Where it belongs</div>
        <h2>A cabinet for rooms people already trust.</h2>
        <p className="intro">
          Mini BeautyPOD is sized for a hosted space: somewhere a guest, a traveller or a colleague might pause for a minute.
        </p>
        <div className="places">
          {places.map((place) => (
            <article className={place.lead ? 'place lead-place' : 'place'} key={place.title}>
              <div>
                <div className="label">{place.label}</div>
                <h3>{place.title}</h3>
              </div>
              <p>{place.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
