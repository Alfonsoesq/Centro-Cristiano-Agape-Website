import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showMap, setShowMap] = useState(false);

  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contacto</h3>
          <address className="not-italic mb-2">
            Durazno 3A,<br />
            Las Huertas, Tlaquepaque, Jalisco
          </address>
          <p className="mb-1"><strong>Horario de Servicios:</strong></p>
          <ul className="mb-4">
            <li>Domingo: 10:00 AM</li>
            <li>Miércoles: 7:00 PM</li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex space-x-6 text-2xl text-gray-600">
            <a href="https://www.facebook.com/secretosdelreino" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ccagapegdl/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@secretosdelreino/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Nuestra Ubicación</h3>

          {/* Toggle button for mobile */}
          <button
            className="md:hidden mb-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
            onClick={() => setShowMap(!showMap)}
          >
            {showMap ? "Ocultar mapa" : "Ver mapa"}
          </button>

          {/* Map container — hidden on mobile unless toggled */}
          <div className={`${showMap ? "block" : "hidden"} md:block aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-md`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.814197441417!2d-103.30864416099962!3d20.616256310880654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3015bec30c3%3A0xc14984e896c86bbe!2sCentro%20Cristiano%20Agape%20Guadalajara!5e0!3m2!1sen!2smx!4v1754612037884!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Centro Cristiano Ágape Guadalajara Location"
              aria-label="Mapa de ubicación Centro Cristiano Ágape en Guadalajara"
            />
          </div>
        </div>

        {/* Quick Links and Mission */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
          <ul className="mb-6 space-y-2">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/visitar" className="hover:underline">Planifica tu Visita</a></li>
            <li><a href="/eventos" className="hover:underline">Eventos</a></li>
            <li><a href="/sermones" className="hover:underline">Sermones</a></li>
          </ul>

          <h3 className="font-semibold text-lg mb-2">Nuestra Misión</h3>
          <p className="text-sm text-gray-600">
            Centro Cristiano Agape busca impactar vidas a través del amor de
            Cristo, la enseñanza bíblica y la comunidad.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {currentYear} Centro Cristiano Agape. Todos los derechos reservados.
      </div>
    </footer>
  );
}
