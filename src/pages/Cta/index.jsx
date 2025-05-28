import priscila from "../../assets/images/nutritionist/PriscilaAraujo1.JPG";
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

     
    </>
  );
}
