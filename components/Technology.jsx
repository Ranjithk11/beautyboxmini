import { flow } from '../lib/content';

export default function Technology() {
  return (
    <section className="section soft" id="technology">
      <div className="wrap">
        <div className="kicker reveal">Behind the cabinet</div>
        <h2 className="reveal">From a lifted bottle<br />to a ledger you can read.</h2>
        <p className="intro reveal">
          Each movement becomes a small record: which product, taken or returned, when, and which cabinet. That record is what the dashboard is built on.
        </p>
        <div className="flow">
          {flow.map((item) => (
            <article className="reveal" key={item.index}>
              <div className="index">{item.index}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
