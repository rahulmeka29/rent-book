import React from "react";

const Service = () => {
  return (
    <div>
      <section className="services">
        <div className="container">
          <h1 className="services-title">Our Services</h1>
          <div className="services-list">
            <div className="service">
              <h3>Book Rentals</h3>
              <p>
                Rent books for a fraction of the cost of buying them. We offer a
                variety of rental durations to fit your needs.
              </p>
            </div>
            <div className="service">
              <h3>Book Purchases</h3>
              <p>
                Buy books at affordable prices. We offer a variety of payment
                options, including major credit cards and PayPal.
              </p>
            </div>
            <div className="service">
              <h3>E-Books</h3>
              <p>
                Download e-books to read on your computer, tablet, or phone. We
                offer a variety of e-book formats, including EPUB, MOBI, and
                PDF.
              </p>
            </div>
            <div className="service">
              <h3>Audiobooks</h3>
              <p>
                Download audiobooks to listen to on your computer, tablet, or
                phone. We offer a variety of audiobook formats, including MP3
                and WAV.
              </p>
            </div>
            <div className="service">
              <h3>Book Reviews</h3>
              <p>
                Read book reviews and ratings from other readers. Get
                recommendations based on your reading history and preferences.
              </p>
              <a href="/Aboutus" class="button">
                Aboutus
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
