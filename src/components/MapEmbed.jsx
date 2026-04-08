export default function MapEmbed() {
  return (
    <div className="overflow-hidden h-80 md:h-96 border border-black/10">
      <iframe
        title="Hôtel Les Carillons — Cransac-les-Thermes"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.5!2d2.2814!3d44.5225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCransac-les-Thermes!5e0!3m2!1sfr!2sfr!4v1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
