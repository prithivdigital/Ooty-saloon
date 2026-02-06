import { Link } from "react-router-dom";
import { salons } from "../data/salons";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      {/* SEO Meta */}
      <Helmet>
        <title>Ooty Saloon – Zero Five September | Best Salons in Ooty</title>
        <meta name="description" content="Discover the best salons and haircuts in Ooty. Shop owners, contact us to get your salon listed on Ooty Saloon – Zero Five September." />
      </Helmet>

      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)", // premium purple-blue gradient
        padding: "50px 20px",
        textAlign: "center",
        borderRadius: "12px",
        color: "#fff",
        marginBottom: "30px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "15px" }}>Ooty Saloon – Zero Five September</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 20px" }}>
          Find the best salons and haircuts in Ooty. Shop owners, get your salon listed and reach more customers today!
        </p>
        <a 
          href="https://wa.me/9360491063"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#ff6b6b", // standout pink-red for CTA
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            transition: "0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#ff4c4c"}
          onMouseOut={e => e.currentTarget.style.background = "#ff6b6b"}
        >
          Get Your Salon Listed
        </a>
      </div>

      {/* All Salons Grid */}
      <h2 style={{ marginBottom: "15px", textAlign: "center", color: "#333" }}>All Salons in Ooty</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "15px",
        marginBottom: "40px"
      }}>
        {salons.map(salon => (
          <div key={salon.id} style={{ border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", transition: "0.3s" }}>
            <img 
              src={salon.images[0]} 
              alt={`${salon.name} – Ooty Saloon Zero Five September – Main Image`} 
              style={{ width: "100%", height: "160px", objectFit: "cover" }} 
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ marginBottom: "5px", fontSize: "1.1rem", color: "#222" }}>{salon.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "10px" }}>
                {salon.description.slice(0, 60)}...
              </p>
              <Link to={`/salon/${salon.id}`} style={{
                display: "inline-block",
                padding: "8px 16px",
                background: "#007bff", // blue for view details
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "0.9rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                transition: "0.3s"
              }}
              onMouseOver={e => e.currentTarget.style.background = "#0056b3"}
              onMouseOut={e => e.currentTarget.style.background = "#007bff"}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div style={{ textAlign: "center", marginTop: "40px", padding: "40px", background: "#f5f5f5", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <h2 style={{ color: "#222" }}>Want your Salon listed?</h2>
        <p style={{ color: "#555" }}>Contact us now to get your shop on Ooty Saloon – Zero Five September and reach more customers!</p>
        <a 
          href="https://wa.me/9360491063"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "14px 28px",
            background: "#25D366", // WhatsApp green
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#1ebe5d"}
          onMouseOut={e => e.currentTarget.style.background = "#25D366"}
        >
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}
