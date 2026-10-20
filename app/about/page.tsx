import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">♡ A Little About Us ♡</span>

          <h1>
            More Than Coffee,
            <span> It&apos;s a Little Happiness.</span>
          </h1>

          <p>
            Sweet Cloud Café is a cozy little corner where sweet treats,
            lovely drinks, and adorable friends come together to make
            your everyday moments feel special.
          </p>

          <Link href="/menu" className="about-hero-button">
            Explore Our Menu ♡
          </Link>
        </div>

        <div className="about-hero-image">
          <Image
            src="/images/characters/hero-all-char.png"
            alt="Sweet Cloud Café characters"
            width={550}
            height={420}
            priority
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="story-image">
          <Image
            src="/images/characters/hello-kitty.png"
            alt="Hello Kitty character"
            width={280}
            height={280}
          />
        </div>

        <div className="story-content">
          <span className="about-label">♡ Our Story ♡</span>

          <h2>A Cozy Little Place with a Big Heart</h2>

          <p>
            Sweet Cloud Café was created from a simple idea:
            everyone deserves a little sweetness in their day.
            We imagined a cozy place filled with dreamy drinks,
            delightful desserts, and charming characters.
          </p>

          <p>
            Whether you are catching up with friends, taking a
            break from a busy day, or simply treating yourself,
            we hope every visit brings you a little moment of joy.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="about-section-heading">
          <span className="about-label">♡ What We Believe ♡</span>
          <h2>Little Things, Lovely Moments</h2>
          <p>Three little things that make our café special.</p>
        </div>

        <div className="values-grid">
          <article className="value-card value-pink">
            <span className="value-icon">♡</span>
            <h3>Made with Love</h3>
            <p>
              Every treat is part of our mission to make your
              day feel a little sweeter.
            </p>
          </article>

          <article className="value-card value-blue">
            <span className="value-icon">☁</span>
            <h3>A Cozy Escape</h3>
            <p>
              A welcoming little space to relax, recharge,
              and enjoy your own happy moments.
            </p>
          </article>

          <article className="value-card value-cream">
            <span className="value-icon">✿</span>
            <h3>Sweet Connections</h3>
            <p>
              Good food tastes even better when shared with
              the people who make you smile.
            </p>
          </article>
        </div>
      </section>

      {/* Our Promise */}
      <section className="about-promise">
        <span className="about-label">♡ A Little Promise ♡</span>

        <h2>Your Happy Place Awaits</h2>

        <p>
          Come for the treats, stay for the smiles, and leave
          with a little more happiness than you came with.
        </p>

        <Link href="/menu" className="about-hero-button">
          Find Your Favorite Treat ♡
        </Link>
      </section>
    </main>
  );
}