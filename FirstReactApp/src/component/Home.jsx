import React from "react";
import "../App.css"; // Import global styles

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to The Lake & Resorts</h1>
          <p>Experience luxury, comfort, and breathtaking views at our exclusive resort.</p>
          <a href="/booking" className="btn">Book Your Stay</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service">
            <img src="/images/room.jpg" alt="Luxury Rooms" />
            <h3>Luxury Rooms</h3>
            <p>Stay in our comfortable and well-equipped rooms with stunning lake views.</p>
          </div>
          <div className="service">
            <img src="/images/dining.jpg" alt="Fine Dining" />
            <h3>Fine Dining</h3>
            <p>Enjoy world-class cuisine prepared by our expert chefs in a scenic environment.</p>
          </div>
          <div className="service">
            <img src="/images/spa.jpg" alt="Spa & Wellness" />
            <h3>Spa & Wellness</h3>
            <p>Relax and rejuvenate with our premium spa and wellness treatments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}




















/*import React from "react";
import "../App.css"; // Import the same CSS file to maintain styling

export default function Home() {
  return (
    <div className="about-container">
      <h2>Hello..How are you...!!!</h2>
      <p>Welcome to My first React App! This is a simple demo project to learn React components, styling, and navigation.</p>
      <p>We aim to build modern, user-friendly web applications with React.</p>
    </div>
  );
}*/
