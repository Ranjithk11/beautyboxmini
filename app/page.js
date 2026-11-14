import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Cabinet from '../components/Cabinet';
import Specifications from '../components/Specifications';
import Journey from '../components/Journey';
import Technology from '../components/Technology';
import Places from '../components/Places';
import Enquire from '../components/Enquire';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="hero" id="home">
          <Hero />
          <Metrics />
        </section>
        <Cabinet />
        <Specifications />
        <Journey />
        <Technology />
        <Places />
        <Enquire />
      </main>
      <Footer />
    </>
  );
}
