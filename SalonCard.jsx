import { Link } from "react-router-dom";

export default function SalonCard({ salon }) {
  return (
    <div className="salon-card">
      <img src={salon.image} alt={`${salon.name} in Ooty`} />
      <h3>{salon.name}</h3>
      <p>{salon.address}</p>
      <div className="btn-group">
        <button className="call-btn" onClick={() => window.open(`tel:${salon.phone}`)}>Call</button>
        <button className="whatsapp-btn" onClick={() => window.open(`https://wa.me/${salon.whatsapp}`)}>WhatsApp</button>
        <Link to={`/salon/${salon.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}
