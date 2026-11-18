import { Fraunces, Outfit } from 'next/font/google';
import Lightbox from '../components/Lightbox';
import DemoDialog from '../components/DemoDialog';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces'
});

export const metadata = {
  title: 'BeautyBox by Leaf Water | Mini BeautyBox',
  description: 'BeautyBox by Leaf Water — the Mini BeautyBox. A compact RFID skincare cabinet. Customers pick a product, see the price, pay, or place it back.',
  icons: { icon: '/logo.jpg' }
};

const motionScript = `
(function () {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('motion');
  } catch (e) { return; }
  function arm() {
    var nodes = document.querySelectorAll('.reveal');
    var groups = new Map();
    nodes.forEach(function (node) {
      var list = groups.get(node.parentElement) || [];
      list.push(node);
      groups.set(node.parentElement, list);
    });
    groups.forEach(function (list) {
      list.forEach(function (node, index) {
        node.style.setProperty('--d', Math.min(index, 8) * 80 + 'ms');
      });
    });
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (node) { node.classList.add('in'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px 48px 0px' });
    nodes.forEach(function (node) { observer.observe(node); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arm);
  else arm();
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
        <Lightbox>
          <DemoDialog>{children}</DemoDialog>
        </Lightbox>
      </body>
    </html>
  );
}
