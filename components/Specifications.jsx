import ZoomImage from './ZoomImage';
import { specifications } from '../lib/content';

export default function Specifications() {
  return (
    <section className="section cream" id="specs">
      <div className="wrap">
        <div className="kicker">Engineering</div>
        <h2>The measurements, kept honest.</h2>
        <p className="intro">
          Taken from the Mini BeautyPOD sheet: external size, shelf clearances, tablet, and an approximate capacity plan.
        </p>
        <div className="spec-layout">
          <div className="spec-card">
            <div className="spec-head">
              <h3>Mini BeautyPOD</h3>
              <span className="pill">Specification</span>
            </div>
            <table>
              <tbody>
                {specifications.map(([label, value]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="fine">
              Capacity depends on bottle and jar size and how the shelves are dressed. Overall height of 1,030 mm includes tolerance. Open the drawing to read shelf-by-shelf fit.
            </p>
          </div>
          <div className="spec-visual plate">
            <ZoomImage
              src="/images/mini-beautypod-specifications.jpeg"
              alt="Full Mini BeautyPOD engineering sheet with external dimensions, interior spacing, tablet specs and product fit examples"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
