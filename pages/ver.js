import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Ver() {
  return (
    <>
      <Head>
        <title>Ver - Centro Cristiano Ágape</title>
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Sermones en Línea</h1>
        <p className="mb-4">Disfruta nuestros últimos mensajes en video:</p>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Sermón Destacado"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
