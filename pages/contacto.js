import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Centro Cristiano Agape</title>
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Contacto</h1>
        <p>Para preguntas o peticiones de oración, puedes enviarnos un mensaje.</p>
        <form className="mt-6 max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
          >
            Enviar
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}
