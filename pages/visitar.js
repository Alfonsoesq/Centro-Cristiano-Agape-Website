import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Visitar() {
  return (
    <>
      <Head>
        <title>Visitar - Centro Cristiano Ágape</title>
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Planifica tu Visita</h1>
        <p className="mb-4">Nuestro horario de servicios es:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Domingo: 10:00 AM y 6:00 PM</li>
          <li>Miércoles: 7:00 PM</li>
        </ul>
        <p>Estamos ubicados en:</p>
        <address className="not-italic mb-6">
          Calle Principal 123,<br />
          Guadalajara, Jalisco, México
        </address>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.343591060438!2d-103.34960968480914!3d20.659699906263154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b55bb354b4db%3A0x2a86d1dca5ecaf11!2sGuadalajara%2C%20Jalisco%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1691268453773!5m2!1ses!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Centro Cristiano Ágape Location"
        />
      </main>

      <Footer />
    </>
  );
}
