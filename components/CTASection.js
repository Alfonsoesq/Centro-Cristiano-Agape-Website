export default function CTASection() {
  return (
    <section className="bg-gray-100 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Únete a nosotros este domingo
      </h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Te invitamos a vivir un tiempo de adoración, palabra y comunión. ¡Todos son bienvenidos!
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/visitanos"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Planifica tu visita
        </a>
        <a
          href="/Ver"
          className="bg-amber-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors"
        >
          Ver en línea
        </a>
      </div>
    </section>
  );
}
