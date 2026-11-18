export default function Showreel() {
  return (
    <section className="section showreel" id="film">
      <div className="wrap showreel-grid">
        <div className="reveal">
          <div className="kicker">The film</div>
          <h2>From the walk in<br />to the lit shelf.</h2>
          <p className="intro">
            The opening plays this film across the screen. Here it runs with the picture held in frame, from the walk-in to the lit shelf.
          </p>
        </div>
        <div className="showreel-frame reveal">
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
