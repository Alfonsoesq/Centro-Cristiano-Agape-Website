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

      <section className="relative text-center h-[70vh] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/videos/hero-poster.jpg" // optional poster image
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Fallback text */}
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content on top */}
        <div className="relative z-10 max-w-3xl mx-auto py-20 px-6 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-4">
            ¡Bienvenido a Centro Cristiano Agape!
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md mb-8">
            Un lugar donde Dios transforma vidas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/visitar"
              className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100 transition"
            >
              Planifica tu visita
            </a>
            <a
              href="/ver"
              className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition"
            >
              Ver en línea
            </a>
          </div>
        </div>
      </section>

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
