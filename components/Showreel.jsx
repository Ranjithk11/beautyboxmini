export default function Showreel() {
  return (
    <section className="section showreel" id="film">
      <div className="wrap showreel-grid">
        <div>
          <div className="kicker">The film</div>
          <h2>From the walk in<br />to the lit shelf.</h2>
          <p className="intro">
            The engineering sheet stays in the hero. This vertical film is the moment before a purchase: a guest arrives, then the product is already in the light.
          </p>
        </div>
        <div className="showreel-frame">
          <video
            src="/video/mini-beautypod.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="Film of a guest arriving and a lit skincare shelf"
          />
        </div>
      </div>
    </section>
  );
}
