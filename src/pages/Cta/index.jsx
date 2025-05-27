import priscila from "../../assets/images/nutritionist/PriscilaAraujo1.JPG";
import priscila2 from "../../assets/images/nutritionist/PriscilaAraujo2.JPG";
import logo from "../../assets/images/logos/logo3.png";
import Button from "../../components/Button";

export default function Cta() {
  return (
    <>
      <section className="min-h-screen md:overflow-hidden bg-primary sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 space-y-24 md:space-y-32 lg:space-y-48">
          <div className="flex items-center justify-start md:justify-center">
            <img
              src={logo}
              alt="Logotipo circular com o texto 'Priscila Araújo Nutricionista'"
              className="w-20 h-20"
            />
            <p className="text-white ml-8">Priscila Araújo - CRN 47359/P</p>
          </div>

          <h1 className="text-4xl text-white text-center font-bold md:text-5xl mt-24">
            "Transforme sua dieta, transforme sua vida!"
          </h1>

          <div className="mt-8 md:mt-24 text-center">
            <Button />
          </div>
        </div>

        <img
          alt="Nutricionista Priscila Araújo de jaleco branco"
          src={priscila}
          className="hidden w-full object-cover sm:h-full sm:block"
        />
      </section>

      {/* Section sobre */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-18">
          
          <div className="w-full md:w-1/2 flex justify-center">
            
            <img 
              src={priscila2}
              alt="Nutricionista Priscila Araújo sorrindo"
              className="rounded-3xl border-2 border-primary shadow-md max-w-[500px] w-full h-auto"
            />
          
          </div>

          <div className="w-full md:w-1/2">

            <h2 className="text-primary text-3xl font-semibold mb-24 text-center">
              Sobre a Nutricionista Priscila
            </h2>

            <p className="text-gray-700 leading-relaxed text-justify">
              A Nutricionista Priscila é uma especialista em nutrição que se dedica a transformar vidas por meio de
              uma alimentação equilibrada e saudável. Com uma vasta experiência na elaboração de programas nutricionais
              personalizados, ela acredita que cada indivíduo é único e merece um plano alimentar que atenda suas
              necessidades específicas. A Nutricionista Priscila acompanha seus pacientes de perto, oferecendo orientação
              contínua e apoio motivacional, garantindo resultados eficazes e duradouros. Junte-se a ela nessa jornada
              para uma vida melhor e mais saudável.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
}
