import ZoomImage from './ZoomImage';
import { steps } from '../lib/content';

export default function Journey() {
  return (
    <section className="section" id="journey">
      <div className="wrap">
        <div className="center reveal">
          <div className="kicker">Customer journey</div>
          <h2>Pick. View. Pay.<br />Or keep it back.</h2>
          <p className="intro">
            The cabinet stays quiet until a product moves. RFID names the action. The screen answers. If the bottle returns to the shelf, the sale simply ends.
          </p>
        </div>
        <div className="journey-frame reveal">
          <ZoomImage
            src="/images/beautybox-rfid-workflow.jpeg"
            alt="Five-step BeautyBox workflow: products tagged inside the cabinet, removal detected, price shown, payment by UPI card or QR, or product returned"
          />
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article className="step reveal" key={step.title}>
              <div className="num">{index + 1}</div>
              <b>{step.title}</b>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
