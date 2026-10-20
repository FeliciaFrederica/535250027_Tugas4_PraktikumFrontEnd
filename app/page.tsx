import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section className="hero">
      <div className="hero-container">
      {/* Hero Content */}
      <div className="hero-content">
      <span className="hero-label">
      ♡ A Little Café Full of Love ♡
      </span>
        <h1>Welcome to <br /><span>Sweet Cloud Café!</span></h1>
            <p className="hero-description">
              Where every sip feels like a hug. Discover sweet treats,
              dreamy drinks, and lovely moments with your favorite friends!
            </p>

            <div className="hero-buttons">
              <Link href="/menu" className="hero-button">
                Explore Our Menu ♡
              </Link>

              <Link href="/about" className="hero-button-secondary">
                Our Story
              </Link>
            </div>

            <div className="hero-note">
              ☁️ Made with sweetness and a little bit of magic!
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper">
            <div className="hero-circle"></div>

            <Image
              src="/images/characters/hero-all-char.png"
              alt="Sweet friends at Sweet Cloud Café"
              width={500}
              height={500}
              priority
              className="hero-image"
            />

            <span className="hero-decoration decoration-star">✦</span>
            <span className="hero-decoration decoration-heart">♡</span>
            <span className="hero-decoration decoration-sparkle">✧</span>
          </div>
        </div>
      </section>
              
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-container">
          <span className="welcome-label">♡ A Place to Feel Happy ♡</span>

          <h2>
            A Little Cup of <span>Happiness</span>
          </h2>

          <p className="welcome-description">
            Welcome to Sweet Cloud Café, a dreamy little corner where
            delicious treats meet adorable friends. From creamy drinks
            to delightful desserts, every moment here is made to feel
            extra sweet.
          </p>

          <div className="welcome-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">☁️</span>
              <h3>Dreamy Drinks</h3>
              <p>Sweet sips to brighten your day.</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">🍰</span>
              <h3>Lovely Treats</h3>
              <p>Delicious desserts made for happy moments.</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-icon">🎀</span>
              <h3>Kawaii Moments</h3>
              <p>A cozy place to relax and feel the magic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section className="signature-section">
        <div className="signature-container">
          <div className="section-heading">
            <span className="section-label">♡ Made with Love ♡</span>
            <h2>Our Signature <span>Menu</span></h2>
            <p>
              A little sweetness, a little magic, and lots of happiness
              in every bite and sip!
            </p>
          </div>

          <div className="signature-grid">
            {/* Menu 1 */}
            <article className="signature-card">
              <div className="signature-image pink-bg">
                <Image
                  src="/images/menu/cloud-latte.jpeg"
                  alt="Cloud Latte"
                  width={300}
                  height={260}
                />
              </div>

              <div className="signature-info">
                <span className="menu-category">♡ Best Seller</span>
                <h3>Cloud Latte</h3>
                <p>Creamy milk and smooth coffee topped with fluffy cloud-like foam.</p>
                <Link href="/menu/cloud-latte" className="menu-detail-link">
                  Discover More →
                </Link>
              </div>
            </article>

            {/* Menu 2 */}
            <article className="signature-card">
              <div className="signature-image blue-bg">
                <Image
                  src="/images/menu/sweet-potato-brulee.png"
                  alt="Baked Sweet Potato Brûlée with Vanilla Ice Cream"
                  width={300}
                  height={260}
                />
              </div>

              <div className="signature-info">
                <span className="menu-category">♡ Sweet & Creamy</span>
                <h3>Sweet Potato Brûlée</h3>
                <p>Cool baked sweet potato brûlée served with creamy vanilla ice cream for a delightful dessert experience.</p>
                <Link href="/menu/sweet-potato-brulee" className="menu-detail-link">
                  Discover More →
                </Link>
              </div>
            </article>

            {/* Menu 3 */}
            <article className="signature-card">
              <div className="signature-image lavender-bg">
                <Image
                  src="/images/menu/strawberry-cake.jpg"
                  alt="Strawberry Cloud Cake"
                  width={300}
                  height={260}
                />
              </div>

              <div className="signature-info">
                <span className="menu-category">♡ Sweet Treat</span>
                <h3>Strawberry Cloud Cake</h3>
                <p> Soft strawberry cake layered with fluffy cream and a lovely touch of sweetness.</p>
                <Link href="/menu/strawberry-cake" className="menu-detail-link">
                  Discover More →
                </Link>
              </div>
            </article>

            {/* Menu 4 */}
            <article className="signature-card">
              <div className="signature-image cream-bg">
                <Image
                  src="/images/menu/caramel-pudding.jpg"
                  alt="Purin's Caramel Dream"
                  width={300}
                  height={260}
                />
              </div>

              <div className="signature-info">
                <span className="menu-category">♡ Café Favorite</span>
                <h3>Purin Caramel Dream</h3>
                <p>Brown sugar, creamy milk, ice cream, and fluffy marshmallows in one dreamy drink.</p>
                <Link href="/menu/purin-caramel-dream" className="menu-detail-link">
                  Discover More →
                </Link>
              </div>
            </article>
          </div>

          <div className="signature-footer">
            <Link href="/menu" className="all-menu-button">
              Explore All Menus ♡
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Friends Section */}
      <section className="friends-section">
        <div className="friends-container">
          <div className="section-heading">
            <span className="section-label">♡ Your Favorite Little Friends ♡</span>
            <h2>Meet Our <span>Friends</span></h2>
            <p>Every friend brings a little sparkle and happiness to our dreamy café!</p>
          </div>

          <div className="friends-grid">
            {/* Hello Kitty */}
            <article className="friend-card hello-kitty">
              <div className="friend-image">
                <Image
                  src="/images/characters/hello-kitty.png"
                  alt="Hello Kitty"
                  width={250}
                  height={220}
                />
              </div>

              <div className="friend-info">
                <h3>Hello Kitty</h3>
                <p>Sweet smiles and lovely moments, always!</p>
                <span className="friend-tag">Sweet & Kind 🎀</span>
              </div>
            </article>

            {/* Cinnamoroll */}
            <article className="friend-card cinnamoroll">
              <div className="friend-image">
                <Image
                  src="/images/characters/cinnamoroll.png"
                  alt="Cinnamoroll"
                  width={220}
                  height={220}
                />
              </div>

              <div className="friend-info">
                <h3>Cinnamoroll</h3>
                <p>Fluffy clouds and dreamy little adventures.</p>
                <span className="friend-tag">Soft & Dreamy ☁️</span>
              </div>
            </article>

            {/* My Melody */}
            <article className="friend-card my-melody">
              <div className="friend-image">
                <Image
                  src="/images/characters/my-melody.png"
                  alt="My Melody"
                  width={220}
                  height={220}
                />
              </div>

              <div className="friend-info">
                <h3>My Melody</h3>
                <p>A sprinkle of kindness in every little thing.</p>
                <span className="friend-tag">Lovely & Gentle 🌷</span>
              </div>
            </article>

            {/* Kuromi */}
            <article className="friend-card kuromi">
              <div className="friend-image">
                <Image
                  src="/images/characters/kuromi.png"
                  alt="Kuromi"
                  width={220}
                  height={220}
                />
              </div>

              <div className="friend-info">
                <h3>Kuromi</h3>
                <p>A little mischievous, a whole lot of charm!</p>
                <span className="friend-tag">Bold & Playful 💜</span>
              </div>
            </article>

            {/* Pompompurin */}
            <article className="friend-card pompompurin">
              <div className="friend-image">
                <Image
                  src="/images/characters/pompompurin.png"
                  alt="Pompompurin"
                  width={220}
                  height={220}
                />
              </div>

              <div className="friend-info">
                <h3>Pompompurin</h3>
                <p>Cozy vibes and caramel-sweet happiness.</p>
                <span className="friend-tag">Chill & Cozy 🍮</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="closing-banner">
        <div className="closing-content">
          <span className="closing-decoration">୨୧ ♡ ୨୧</span>
          <h2>A Little Treat, A Lot of Happiness!</h2>
          <p>Take a little break, enjoy your favorite treats, and let your day feel a little sweeter.</p>
          <Link href="/menu" className="closing-button">
            Explore Our Menu ♡
          </Link>
        </div>
      </section>
    </main>
  );
}
