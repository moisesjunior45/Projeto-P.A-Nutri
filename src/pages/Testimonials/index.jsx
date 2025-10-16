import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "../../styles/custom-swiper-bullet.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gustavo Lopes",
      location: "Consulta online",
      text: "Mas ontem cheguei a dar uma olhada e ameiii o cronograma, muito lindo, muito bem feito.",
    },
    {
      name: "Juan Santos",
      location: "Consulta online",
      text: "Obrigado, ficou bem fácil de seguir.",
    },
    {
      name: "Carlos Eduardo",
      location: "Consulta online",
      text: "A equipe foi muito atenciosa e profissional. Meu processo foi tranquilo e consegui alcançar meus objetivos de forma eficaz!",
    },
  ];

  return (
    <section
      className="container mx-auto px-6 py-16 flex flex-col justify-center"
      id="testimonials"
    >
      <h3 className="text-[20px] font-normal text-center mb-2 text-gray-600">
        DEPOIMENTOS
      </h3>
      <h1 className="text-primary text-[32px] md:text-[40px] font-bold mb-8 text-center">
        O que os clientes dizem.
      </h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full max-w-3xl mx-auto shadow-lg"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="text-center p-8 bg-white rounded-xl border-gray-200"
          >
            <div className="flex justify-center mb-4 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-[18px] font-medium text-gray-800 italic">
              "{testimonial.text}"
            </p>
            <p className="text-[16px] font-semibold mt-6 text-primary">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
