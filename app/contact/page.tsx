"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo form: belum terhubung ke backend atau layanan email.
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <span className="contact-decoration">୨୧ ♡ ୨୧</span>
        <h1>Let&apos;s Stay in Touch</h1>
        <p>Have a question or just want to say hello? We&apos;d love to hear from you!</p>
        <span className="contact-hero-bottom">Sending a little sweetness your way ♡</span>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <span className="contact-label">♡ SAY HELLO ♡</span>
            <h2>We&apos;d Love to Hear From You</h2>
            <p className="contact-description">
              Whether you have a question about our menu
              or simply want to share a little love,
              our little café is always happy to hear from you.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-card">
                <span className="contact-info-icon">✉</span>
                <div>
                  <h3>Email Us</h3>
                  <p>hello@sweetcloudcafe.smail.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-icon">⌖</span>
                <div>
                  <h3>Visit Our Café</h3>
                  <p>St. Kiyowo San No. 67, Jakarta, Indonesia</p>
                </div>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-icon">◷</span>
                <div>
                  <h3>Opening Hours</h3>
                  <p>Monday – Sunday</p>
                  <p>09:00 AM – 09:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <span className="contact-label">♡ DROP US A NOTE ♡</span>
            <h2>Send a Sweet Message</h2>
            <p>Fill out the form below and leave us a little message!</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="name">Your Name ♡</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Felicia Frederica"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Your Email ♡</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@smail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Your Message ♡</label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your sweet message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-button">
                Send Message ♡
              </button>

              {isSubmitted && (
                <p className="contact-success" role="status">
                  ♡ Your message has been saved! Thank you for reaching out.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="contact-closing">
        <span>♡ ✧ ♡</span>
        <h2>A Little Hello Means a Lot</h2>
        <p>
          Every message makes our little cloud a little brighter.
        </p>
      </section>
    </main>
  );
}