import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import "../../styles/custom-swiper-bullet.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gustavo Lopes",
      text: "Mas ontem cheguei a dar uma olhada e ameiii o cronograma, muito lindo, muito bem feito.",
    },
    {
      name: "Juan Santos",
      text: "Obrigado, ficou bem fácil de seguir.",
    },
    {
      name: "Carlos Eduardo",
      text: "A equipe foi muito atenciosa e profissional. Meu processo foi tranquilo e consegui alcançar meus objetivos de forma eficaz!",
    },
  ];

  return (
    <>
      <section
        className="container mx-auto px-6 py-16 h-screen flex flex-col justify-center"
        id="testimonials"
      >
        <h3 className="text-[20px] font-normal text-center mb-2">
          DEPOIMENTOS
        </h3>
        <h1 className="text-primary text-[40px] font-bold mb-8 text-center">
          O que os clientes dizem.
        </h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full max-w-7xl mx-auto shadow-lg cursor-pointer"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="text-center p-6 bg-white rounded-lg mb-6"
            >
              <p className="text-[18px] font-medium">"{testimonial.text}"</p>
              <p className="text-[18px] font-medium mt-6 mb-4 opacity-80">
                {testimonial.name}.
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
