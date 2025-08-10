import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 py-12 text-center px-4"
    >
      {/* Heading */}
      <h2
        className={`text-3xl font-bold mb-4 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        Únete a nosotros este domingo
      </h2>

      {/* Paragraph */}
      <p
        className={`text-lg mb-6 max-w-xl mx-auto transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        Te invitamos a vivir un tiempo de adoración, palabra y comunión. ¡Todos son bienvenidos!
      </p>

      {/* Buttons */}
      <div
        className={`flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
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
