import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ana López',
    photo: '/testimonials/ana.jpg', // Place photos in public/testimonials/
    quote: 'Centro Cristiano Agape cambió mi vida. Aquí encontré paz y familia.',
  },
  {
    id: 2,
    name: 'Carlos Méndez',
    photo: '/testimonials/carlos.jpg',
    quote: 'Me encanta cómo la comunidad se apoya mutuamente en cada paso.',
  },
  {
    id: 3,
    name: 'María Torres',
    photo: '/testimonials/maria.jpg',
    quote: 'La palabra que recibí aquí me fortaleció en momentos difíciles.',
  },
];

export default function TestimonialsSection() {
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
      className={`bg-gray-50 py-12 px-4 text-center transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <h2 className="text-3xl font-bold mb-8">Lo que dice nuestra comunidad</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map(({ id, name, photo, quote }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={photo}
              alt={`Foto de ${name}`}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <p className="italic text-gray-700 mb-2">"{quote}"</p>
            <span className="font-semibold text-gray-900">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
