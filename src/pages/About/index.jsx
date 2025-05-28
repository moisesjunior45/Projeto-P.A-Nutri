import priscila2 from "../../assets/images/nutritionist/PriscilaAraujo2.JPG";

export default function About() {
  return (
    <>
      <section id="about" className="bg-white py-16">
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
              A Nutricionista Priscila é uma especialista em nutrição que se
              dedica a transformar vidas por meio de uma alimentação equilibrada
              e saudável. Com uma vasta experiência na elaboração de programas
              nutricionais personalizados, ela acredita que cada indivíduo é
              único e merece um plano alimentar que atenda suas necessidades
              específicas. A Nutricionista Priscila acompanha seus pacientes de
              perto, oferecendo orientação contínua e apoio motivacional,
              garantindo resultados eficazes e duradouros. Junte-se a ela nessa
              jornada para uma vida melhor e mais saudável.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
