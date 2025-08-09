import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Swiper 9+ modules
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroCarousel({ showEventSlide = true }) {
  const swiperRef = useRef(null);

  return (
    <div className="relative h-[70vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 44000, disableOnInteraction: false }}
        pagination={{
          el: '.swiper-pagination',     // <-- explicitly target this element
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        className="h-full swiper"       // ensure `.swiper:hover` works
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
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

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md mb-4 text-center">
                ¡Bienvenidos a Centro Cristiano Agape!
              </h1>
              <p className="text-lg md:text-xl drop-shadow-md text-center max-w-2xl">
                Un lugar donde Dios transforma vidas.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <a href="/sermon/last-sermon" className="block w-full h-full relative">
            <img
              src="/images/sermon-thumbnail.jpg"
              alt="Último mensaje"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6">
              <h2 className="text-3xl font-bold mb-2 text-center">Último Mensaje</h2>
              <p className="text-center">“Fe que mueve montañas” - Pr. Sergio</p>
              <button className="mt-4 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
                Ver mensaje
              </button>
            </div>
          </a>
        </SwiperSlide>

        {/* Slide 3 (optional) */}
        {showEventSlide && (
          <SwiperSlide>
            <a href="/eventos/proximo-evento" className="block w-full h-full relative">
              <img
                src="/images/evento-thumbnail.jpg"
                alt="Próximo evento"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6">
                <h2 className="text-3xl font-bold mb-2 text-center">Próximo Evento</h2>
                <p className="text-center">Únete a nosotros para una experiencia única</p>
                <button className="mt-4 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
                  Más info
                </button>
              </div>
            </a>
          </SwiperSlide>
        )}

        {/* Explicit pagination element - this ensures the element exists for Swiper to attach to */}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
}
