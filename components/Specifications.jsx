import ZoomImage from './ZoomImage';
import { specifications } from '../lib/content';

export default function Specifications() {
  return (
    <section className="section cream" id="specs">
      <div className="wrap spec-layout">
        <div className="spec-card reveal">
          <div className="spec-head">
            <h2>Mini BeautyBox</h2>
            <span className="pill">Specification</span>
          </div>
          <p className="spec-lead">The few measurements that decide where it can stand.</p>
          <ul className="spec-points">
            {specifications.map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </li>
            ))}
          </ul>
        </div>
        <div className="spec-visual plate reveal">
          <ZoomImage
            src="/images/main.jpeg"
            alt="Mini BeautyBox cabinet, open, with warm light on three shelves of skincare"
          />
        </div>
      </div>
    </section>
  );
}
