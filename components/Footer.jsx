import Logo from './Logo';
import { footerLinks } from '../lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div>
          <Logo className="logo footer-logo" />
          <p>
            Dimensions, capacity and the payment journey follow the supplied Mini BeautyPOD and BeautyBox sheets. Confirm RFID performance and payment integration before a commercial order.
          </p>
        </div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
