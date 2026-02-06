import { useParams } from "react-router-dom";
import { salons } from "../data/salons";
import { Helmet } from "react-helmet";

export default function SalonDetail() {
  const { id } = useParams();
  const salon = salons.find(s => s.id === parseInt(id));

  if (!salon) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Salon not found</h2>;

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      {/* SEO Meta */}
      <Helmet>
        <title>{salon.name} – Ooty Saloon – Zero Five September</title>
        <meta name="description" content={salon.description}/>
      </Helmet>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "5px" }}>{salon.name}</h1>
        <h3 style={{ fontSize: "1.2rem", color: "#555" }}>Ooty Saloon – Zero Five September</h3>
      </div>

      {/* Call & WhatsApp Buttons */}
      <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginBottom: "20px", flexWrap: "wrap" }}>
        <a 
          href={`tel:${salon.phone}`} 
          style={{
            padding: "12px 25px",
            background: "#007bff", // Premium blue
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
          onMouseOver={e => e.currentTarget.style.background = "#0056b3"}
          onMouseOut={e => e.currentTarget.style.background = "#007bff"}
        >
          Call
        </a>
        <a 
          href={`https://wa.me/${salon.whatsapp}`} 
          target="_blank" 
          rel="noreferrer"
          style={{
            padding: "12px 25px",
            background: "#25D366", // WhatsApp green
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#1ebe5d"}
          onMouseOut={e => e.currentTarget.style.background = "#25D366"}
        >
          WhatsApp
        </a>
      </div>

      {/* Address & Timings */}
      <div style={{ marginBottom: "20px" }}>
        <p><strong>Address:</strong> {salon.address}</p>
        <p><strong>Timings:</strong> {salon.timings}</p>
      </div>

      {/* Services */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Services</h3>
        <ul>
          {salon.services.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>

      {/* Description */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Description</h3>
        <p>{salon.description}</p>
      </div>

      {/* Gallery */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Gallery</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "10px"
        }}>
          {salon.images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt={`${salon.name} – Ooty Saloon Zero Five September – Image ${i+1}`} 
              style={{ width: "100%", height: "130px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
            />
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <h3>Location</h3>
        <iframe
          title={salon.name + " map"}
          src={`https://www.google.com/maps?q=${salon.lat},${salon.lng}&hl=es;z=16&output=embed`}
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
