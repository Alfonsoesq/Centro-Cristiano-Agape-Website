import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import aboutImage from '../public/images/about-us.jpg'; // Replace with your actual image path

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      className="bg-white py-12 px-4"
    >
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={aboutImage}
            alt="Centro Cristiano Ágape congregación"
            className="rounded-lg shadow-lg"
            width={500}
            height={350}
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Conoce más sobre nosotros</h2>
          <p className="text-lg mb-6">
            En Centro Cristiano Ágape, existimos para amar a Dios y a las personas.
            Nuestra misión es compartir el mensaje de Jesucristo, servir a nuestra comunidad,
            y crecer juntos en fe y propósito.
          </p>
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Conoce más
          </a>
        </div>
      </div>
    </section>
  );
}
