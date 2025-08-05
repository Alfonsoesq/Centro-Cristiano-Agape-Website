import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Ofrendar() {
  return (
    <>
      <Head>
        <title>Ofrendar - Centro Cristiano Ágape</title>
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Ofrenda</h1>
        <p className="mb-4">
          Gracias por considerar apoyar nuestra obra. Puedes dar tu ofrenda segura en línea.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded">
          Próximamente disponible
        </button>
      </main>

      <Footer />
    </>
  );
}
