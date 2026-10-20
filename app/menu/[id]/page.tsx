import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { menuItems } from "@/data/menu";

type MenuDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MenuDetailPage({
  params,
}: MenuDetailPageProps) {
  const { id } = await params;

  const item = menuItems.find((menu) => menu.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="menu-detail-page">
      {/* Breadcrumb */}
      <div className="detail-breadcrumb">
        <Link href="/">Home</Link>
        <span> / </span>
        <Link href="/menu">Menu</Link>
        <span> / </span>
        <span>{item.name}</span>
      </div>

      {/* Product Detail */}
      <section className="detail-container">
        <div className="detail-image">
          <Image
            src={item.image}
            alt={item.name}
            width={600}
            height={500}
            priority
          />
          {item.badge && (
            <span className="detail-badge">{item.badge}</span>
          )}
        </div>

        <div className="detail-content">
          <span className="detail-category">{item.category}</span>

          <h1>{item.name}</h1>

          <p className="detail-description">{item.description}</p>

          <div className="detail-divider" />

          <div className="detail-price">
            <span>Price</span>
            <strong>Rp{item.price.toLocaleString("id-ID")}</strong>
          </div>

          <div className="detail-note">
            <span>♡</span>
            <p>
              A little treat made to bring sweetness and happiness
              to your day.
            </p>
          </div>

          <div className="detail-actions">
            <Link href="/menu" className="detail-back-button">
              ← Back to Menu
            </Link>

            <Link href="/contact" className="detail-contact-button">
              Contact Us ♡
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Message */}
      <section className="detail-footer">
        <span>୨୧ ♡ ୨୧</span>
        <h2>Something Sweet Just for You</h2>
        <p>Every little treat deserves a little moment of happiness.</p>
        <Link href="/menu">Discover More Treats →</Link>
      </section>
    </main>
  );
}