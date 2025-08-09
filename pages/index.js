import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCarousel from '../components/HeroCarousel'; // Import the carousel component

export default function Home() {
  return (
    <>
      <Head>
        <title>Centro Cristiano Agape</title>
        <meta name="description" content="Bienvenido a Centro Cristiano Agape" />
      </Head>

      <Navbar />

      {/* Replace static video section with the HeroCarousel */}
      <section className="relative text-center h-[70vh]">
        <HeroCarousel showEventSlide={true} />
      </section>

      {/* Keep the rest of your page content as-is */}
      <section className="py-20 px-6 bg-white text-center max-w-3xl mx-auto rounded-lg shadow-md mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mensaje destacado</h2>
        <p className="mb-6 italic text-gray-700">"Fe que mueve montañas" - Pr. Sergio</p>
        <a
          href="/ver"
          className="text-blue-600 underline font-semibold hover:text-blue-800 transition"
        >
          Ver mensaje
        </a>
      </section>

      <Footer />
    </>
  );
}
