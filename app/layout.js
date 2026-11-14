import { Fraunces, Outfit } from 'next/font/google';
import Lightbox from '../components/Lightbox';
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
  title: 'BeautyBox by Leaf Water | Mini BeautyPOD',
  description: 'BeautyBox by Leaf Water — the Mini BeautyPOD. A compact RFID skincare cabinet. Customers pick a product, see the price, pay, or place it back.',
  icons: { icon: '/logo.jpg' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body>
        <Lightbox>{children}</Lightbox>
      </body>
    </html>
  );
}
