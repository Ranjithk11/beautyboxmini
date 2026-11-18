import ZoomImage from './ZoomImage';

export default function Pairing() {
  return (
    <section className="section pairing" id="pairing">
      <div className="wrap">
        <div className="pairing-intro reveal">
          <div className="kicker">Sold together</div>
          <h2>The terminal study,<br />and the cabinet.</h2>
          <p className="intro">
            The airport illustration is offered with the box it pictures. One shows the room. The other is the machine.
          </p>
        </div>
        <div className="pairing-stage">
          <figure className="pairing-scene reveal">
            <ZoomImage
              src="/images/airport.jpg"
              alt="Illustration of a BeautyBox cabinet in an airport terminal, beside the departure gates"
            />
            <figcaption>
              <span>Illustration</span>
              <b>Airports</b>
            </figcaption>
          </figure>
          <figure className="pairing-cabinet reveal">
            <ZoomImage
              src="/images/main.jpeg"
              alt="Mini BeautyBox cabinet with three illuminated shelves of skincare"
            />
            <figcaption>
              <span>The cabinet</span>
              <b>Mini BeautyBox</b>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
