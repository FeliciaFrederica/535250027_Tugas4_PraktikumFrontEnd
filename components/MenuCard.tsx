import Image from "next/image";
import Link from "next/link";
import type { MenuItem } from "@/data/menu";

type MenuCardProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="menu-card">
      <Link
        href={`/menu/${item.id}`}
        className="menu-card-image"
        aria-label={`View ${item.name} details`}
      >
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={300}
        />

        {item.badge && (
          <span className="menu-badge">{item.badge}</span>
        )}
      </Link>

      <div className="menu-card-info">
        <span className="menu-card-category">
          {item.category}
        </span>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="menu-card-bottom">
          <span className="menu-price">
            Rp{item.price.toLocaleString("id-ID")}
          </span>

          <Link
            href={`/menu/${item.id}`}
            className="menu-card-link"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}