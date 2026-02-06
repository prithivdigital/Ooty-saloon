import { salons } from "../data/salons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SalonList() {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <Helmet>
        <title>All Salons in Ooty – Zero Five September</title>
        <meta name="description" content="Browse all listed salons in Ooty on Ooty Saloon – Zero Five September. Book haircuts, styling, and beauty services directly."/>
      </Helmet>

      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>All Salons in Ooty</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {salons.map(salon => (
          <div key={salon.id} style={{ width: "250px", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" }}>
            <img src={salon.images[0]} alt={salon.name} style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
            <div style={{ padding: "10px" }}>
              <h3>{salon.name}</h3>
              <p>{salon.services.join(", ")}</p>
              <Link to={`/salon/${salon.id}`}>
                <button style={{ marginTop: "10px", padding: "8px 16px", borderRadius: "6px", border: "none", background: "#007bff", color: "#fff", cursor: "pointer" }}>
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
