import priscila from "../../assets/images/nutritionist/PriscilaAraujo1.JPG";
import logo from "../../assets/images/logos/logo3.png";

export default function Cta() {
  return (
    <section className="h-[924px] md:overflow-hidden bg-primary sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-auto space-y-48">
        <div className="flex items-center justify-start md:justify-center ">
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
        <a
          href="#"
          className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
        >
          Agendar consulta
        </a>
      </div>
      </div>

      

      <img
        alt="Nutricionista Priscila Araújo de jaleco branco"
        src={priscila}
        className="w-full object-cover sm:h-full"
      />
    </section>
  );
}

