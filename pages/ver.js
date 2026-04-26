import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Ver() {
  return (
    <>
      <Head>
        <title>Ver - Centro Cristiano Agape</title>
      </Head>

      <Navbar />

      <main className="min-h-[60vh] flex items-center justify-center bg-white px-6">
        <div className="max-w-2xl w-full text-center">
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Sermones en Línea</h1>
          <p className="text-lg text-gray-600 mb-10">
            Únete a nuestras transmisiones en vivo y revive nuestros últimos mensajes a través de nuestra página de Facebook.
          </p>

          {/* Facebook Redirect Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex justify-center mb-6">
              {/* Simple Facebook Icon representation */}
              <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Transmisión en Vivo</h2>
            <p className="text-gray-600 font-medium">Domingos — 10:00 AM</p>
            <p className="text-gray-600 font-medium">Miércoles — 7:00 PM</p>
            
            <a 
              href="https://www.facebook.com/secretosdelreino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
            >
              Ir a Facebook Live
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            No necesitas una cuenta de Facebook para ver el video.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}