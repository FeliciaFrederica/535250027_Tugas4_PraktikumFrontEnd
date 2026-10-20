import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>☁ Sweet Cloud Café</h2>
          <p>Where every sip feels like a hug. ♡</p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made with ♡ and a little sprinkle of sweetness.</p>
        <p>© {new Date().getFullYear()} Sweet Cloud Café</p>
      </div>
    </footer>
  );
}