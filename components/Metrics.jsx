import { metrics } from '../lib/content';

export default function Metrics() {
  return (
    <div className="wrap metrics">
      <div className="metric-row">
        {metrics.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
