import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Register modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function HeroCarousel({ showEventSlide = true }) {
  return (
    <Swiper
      autoplay={{ delay: 8000, disableOnInteraction: true }}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="h-[70vh] relative"
    >
      {/* Slide 1: Hero Video */}
      <SwiperSlide>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>

      {/* Slide 2: Sermon teaser */}
      <SwiperSlide>
        <a href="/sermon/last-sermon" className="block w-full h-full relative">
          <img
            src="/images/sermon-thumbnail.jpg"
            alt="Último mensaje"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold mb-2">Último Mensaje</h2>
            <p>“Fe que mueve montañas” - Pr. Sergio</p>
            <button className="mt-4 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
              Ver mensaje
            </button>
          </div>
        </a>
      </SwiperSlide>

      {/* Slide 3: Optional event promo */}
      {showEventSlide && (
        <SwiperSlide>
          <a href="/eventos/proximo-evento" className="block w-full h-full relative">
            <img
              src="/images/evento-thumbnail.jpg"
              alt="Próximo evento"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold mb-2">Próximo Evento</h2>
              <p>Únete a nosotros para una experiencia única</p>
              <button className="mt-4 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
                Más info
              </button>
            </div>
          </a>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
