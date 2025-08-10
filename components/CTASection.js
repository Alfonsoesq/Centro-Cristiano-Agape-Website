export default function CTASection() {
  return (
    <section className="bg-gray-100 py-12 text-center px-4">
      <h2 className="text-3xl font-bold mb-4">
        Únete a nosotros este domingo
      </h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Te invitamos a vivir un tiempo de adoración, palabra y comunión. ¡Todos son bienvenidos!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
        <a
          href="/visitanos"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          Planifica tu visita
        </a>
        <a
          href="/en-linea"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors w-full sm:w-auto"
        >
          Ver en línea
        </a>
      </div>
    </section>
  );
}
