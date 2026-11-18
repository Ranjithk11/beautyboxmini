import { features } from '../lib/content';

export default function Cabinet() {
  return (
    <section className="section" id="cabinet">
      <div className="wrap">
        <div className="kicker reveal">The cabinet</div>
        <h2 className="reveal">A quiet object.<br />A precise retail system.</h2>
        <p className="intro reveal">
          Mini BeautyBox is built for a lobby, a corridor, or a quiet corner. Warm light on three shelves. A Samsung Galaxy Tab A8 at the fascia. An RFID field that notices when a tagged product leaves — and when it returns.
        </p>
        <div className="features quartet">
          {features.map((item) => (
            <div className="feature reveal" key={item.title}>
              <b>{item.title}</b>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
