import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <Helmet>
        <title>Get Your Salon Listed – Ooty Saloon | Zero Five September</title>
        <meta
          name="description"
          content="List your salon on Ooty Saloon – Zero Five September. Contact us via call or WhatsApp to get listed and reach more customers in Ooty."
        />
      </Helmet>

      <h2>Get Your Salon Listed</h2>
      <p>Contact us directly to get your salon listed on Ooty Saloon – Zero Five September.</p>
      <button className="call-btn" onClick={() => window.open("tel:9360491063")}>Call</button>
      <button className="whatsapp-btn" onClick={() => window.open("https://wa.me/919360491063")}>WhatsApp</button>
    </div>
  );
}
