import especialidadesImage from '../../assets/images/logos/Especialidades.jpg';
import { Apple, Dumbbell, Scale, Salad } from 'lucide-react';

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="bg-primary py-14 min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: `url(${especialidadesImage})` }}
    >
      {/* Título */}
      <div className="container mx-auto px-4 text-center text-white mb-16">
        <h2 className="text-3xl font-bold underline">Minhas Especialidades</h2>
      </div>

      {/* Grid com mais espaçamento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center justify-items-center max-w-[1400px] mx-auto px-8">

        {/* Card 1 */}
        <div
          className="bg-white text-primary p-6 rounded-[25px] rounded-tl-[8px] rounded-br-[0px] shadow-md 
          w-[280px] h-[300px] 
          sm:w-[320px] sm:h-[310px] 
          md:w-[360px] md:h-[320px] 
          lg:w-[400px] lg:h-[340px]
          my-8" // Adicionada margem vertical
        >
          <Apple className="w-16 h-16 text-primary mb-4 mx-auto mt-3 border-2 border-primary rounded-full p-2" />
          <h3 className="text-[22px] sm:text-2xl font-bold text-center mb-3">Nutrição Clínica</h3>
          <p className="text-[14px] sm:text-[16px] font-semibold text-center text-[#9E9E9E]">
            Avaliação e acompanhamento nutricional personalizado para promover a saúde e o bem-estar, com foco em prevenção e tratamento de doenças.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white text-primary p-6 rounded-[25px] rounded-tl-[8px] rounded-br-[0px] shadow-md 
          w-[280px] h-[300px] 
          sm:w-[320px] sm:h-[310px] 
          md:w-[360px] md:h-[320px] 
          lg:w-[400px] lg:h-[340px]
          my-8" // Adicionada margem vertical
        >
          <Dumbbell className="w-16 h-16 text-primary mb-4 mx-auto mt-3 border-2 border-primary rounded-full p-2" />
          <h3 className="text-[22px] sm:text-2xl font-bold text-center mb-3">Nutrição Esportiva</h3>
          <p className="text-[14px] sm:text-[16px] font-semibold text-center text-[#9E9E9E]">
            Planejamento alimentar específico para atletas e praticantes de atividades físicas, visando melhorar o desempenho e a recuperação.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white text-primary p-6 rounded-[25px] rounded-tl-[8px] rounded-br-[0px] shadow-md 
          w-[280px] h-[300px] 
          sm:w-[320px] sm:h-[310px] 
          md:w-[360px] md:h-[320px] 
          lg:w-[400px] lg:h-[340px]
          my-8" // Adicionada margem vertical
        >
          <Scale className="w-16 h-16 text-primary mb-4 mx-auto mt-3 border-2 border-primary rounded-full p-2" />
          <h3 className="text-[22px] sm:text-2xl font-bold text-center mb-3">Emagrecimento</h3>
          <p className="text-[14px] sm:text-[16px] font-semibold text-center text-[#9E9E9E]">
            Estratégias nutricionais eficazes para perda de peso saudável e sustentável, com acompanhamento contínuo e motivacional.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white text-primary p-6 rounded-[25px] rounded-tl-[8px] rounded-br-[0px] shadow-md 
          w-[280px] h-[300px] 
          sm:w-[320px] sm:h-[310px] 
          md:w-[360px] md:h-[320px] 
          lg:w-[400px] lg:h-[340px]
          my-8" // Adicionada margem vertical
        >
          <Salad className="w-16 h-16 text-primary mb-3 mx-auto mt-3 border-2 border-primary rounded-full p-2" />
          <h3 className="text-[22px] sm:text-2xl font-bold text-center mb-2">Reeducação Alimentar</h3>
          <p className="text-[14px] sm:text-[16px] font-semibold text-center text-[#9E9E9E]">
            Orientação para mudanças de hábitos alimentares, promovendo uma alimentação equilibrada e consciente para uma vida mais saudável.
          </p>
        </div>

      </div>
    </section>
  );
}