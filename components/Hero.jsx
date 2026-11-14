import ZoomImage from './ZoomImage';
import { proofs } from '../lib/content';

export default function Hero() {
  return (
    <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">RFID skincare display</div>
          <h1>Pick it up.<br /><em>The cabinet already knows.</em></h1>
          <p className="lead">
            BeautyBox is a compact illuminated cabinet for real skincare. A customer lifts a bottle, the screen names it and prices it, and they pay — or simply set it back. RFID reads the movement. No face scan. No queue.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#cabinet">Meet Mini BeautyPOD</a>
            <a className="btn btn-ghost" href="#journey">See the five steps</a>
          </div>
          <div className="proofs">
            {proofs.map((item) => (
              <span key={item}><i className="dot" />{item}</span>
            ))}
          </div>
        </div>
        <div className="hero-stage">
          <div className="hero-frame">
            <ZoomImage
              src="/images/mini-beautypod-specifications.jpeg"
              alt="Mini BeautyPOD engineering sheet: illuminated cabinet, external dimensions, shelf spacing, tablet and capacity"
            />
            <div className="hero-caption">
              <b>Mini BeautyPOD</b>
              <span>1,030 × 650 × 350 mm</span>
            </div>
          </div>
        </div>
      </div>
  );
}
