import { features } from '../lib/content';

export default function Cabinet() {
  return (
    <section className="section" id="cabinet">
      <div className="wrap">
        <div className="kicker">The cabinet</div>
        <h2>A quiet object.<br />A precise retail system.</h2>
        <p className="intro">
          Mini BeautyPOD is built for a lobby, a corridor, or a quiet corner. Warm light on three shelves. A Samsung Galaxy Tab A8 at the fascia. An RFID field that notices when a tagged product leaves — and when it returns.
        </p>
        <div className="features quartet">
          {features.map((item) => (
            <div className="feature" key={item.title}>
              <b>{item.title}</b>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
