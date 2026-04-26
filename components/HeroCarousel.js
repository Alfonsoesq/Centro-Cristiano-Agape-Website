import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HeroCarousel() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <Swiper
        allowTouchMove={false} // Prevents dragging since there's only one slide
        className="h-full"
      >
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

            {/* Clean Overlay: 
                Changed bg-black/50 to a subtle gradient. 
                This lets the 'white' theme breathe at the top 
                while keeping text readable at the bottom. 
            */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/60 flex flex-col justify-center items-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-4 text-center">
                ¡Bienvenidos a Centro Cristiano Agape!
              </h1>
              <p className="text-lg md:text-xl font-light drop-shadow-md text-center max-w-2xl mb-8 opacity-90">
                Un lugar donde Dios transforma vidas.
              </p>

              {/* Updated Pill Buttons for a modern look */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/visitar"
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-gray-100 transition-all hover:scale-105 text-center"
                >
                  Planifica tu visita
                </a>
                <a
                  href="/ver"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-blue-700 transition-all hover:scale-105 text-center"
                >
                  Ver en línea
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}