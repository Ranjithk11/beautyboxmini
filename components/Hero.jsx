import HeroVideo from './HeroVideo';

export default function Hero() {
  return (
    <>
      <HeroVideo />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-copy">
        <div className="eyebrow reveal">Mini BeautyBox</div>
        <h1 className="reveal">Pick it up.<br /><em>The cabinet already knows.</em></h1>
        <a className="btn btn-primary reveal" href="#cabinet">Meet the cabinet</a>
      </div>
    </>
  );
}
