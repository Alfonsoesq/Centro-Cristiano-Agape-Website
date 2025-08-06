import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Centro Cristiano Agape</title>
        <meta name="description" content="Bienvenido a Centro Cristiano Agape" />
      </Head>

      <Navbar />

      <main className="text-center px-6 py-20 bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">¡Bienvenido a Centro Cristiano Agape!</h1>
        <p className="text-lg md:text-xl mb-8">Un lugar donde Dios transforma vidas.</p>
        <div className="flex justify-center gap-4">
          <a href="/visitar" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded">Planifica tu visita</a>
          <a href="/ver" className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded">Ver en línea</a>
        </div>
      </main>

      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mensaje destacado</h2>
        <p className="mb-6">"Fe que mueve montañas" - Pr. Sergio</p>
        <a href="/ver" className="text-blue-600 underline">Ver mensaje</a>
      </section>

      <Footer />
    </>
  );
}
