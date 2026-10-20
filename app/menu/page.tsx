"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menu";

const categories = ["All", "Coffee", "Non-Coffee", "Dessert"] as const;

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="menu-page">
      {/* Menu Hero */}
      <section className="menu-hero">
        <span className="menu-hero-decoration">୨୧ ♡ ୨୧</span>

        <h1>Our Little Menu</h1>

        <p>
          A little sweetness, a little happiness,
          and lots of love in every treat.
        </p>

        <span className="menu-hero-bottom">
          Made with love, served with joy ♡
        </span>
      </section>

      {/* Menu List */}
      <section className="menu-list-section">
        <div className="menu-list-heading">
          <span className="menu-label">♡ Something Delicious ♡</span>
          <h2>Find Your Happy Treat</h2>
          <p>Discover your new favorite from our little collection.</p>
        </div>

        {/* Interactive Categories */}
        <div className="menu-categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`menu-category-pill ${
                activeCategory === category ? "selected" : ""
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Reusable Menu Cards */}
        <div className="menu-grid">
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {filteredMenu.length === 0 && (
          <p className="menu-empty">
            No treats in this category yet. Check back soon! ♡
          </p>
        )}

        <p className="menu-note">
          ♡ Good treats, lovely moments, and a little sprinkle of happiness.
        </p>
      </section>
    </main>
  );
}