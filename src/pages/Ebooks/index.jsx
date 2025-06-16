import Card from "../../components/Card";
import introducaoAlimentar from "../../assets/images/covers/Manual-de-Introducao-Alimentar.png";
import ReceitasSimples from "../../assets/images/covers/Receitas-simples-e-saudaveis.png";
import DicasAlimentacao from "../../assets/images/covers/Dicas-de-como-seguir-uma-boa-alimentacao.png";

export default function Ebook() {
  const ebooks = [
    {
      title: "Manual de Introdução Alimentar",
      image: introducaoAlimentar,
      description:
        "Aprimore suas receitas e tenha resultados reais na sua dieta!",
      downloadLink: "https://example.com/manual-introducao-alimentar",
    },
    {
      title: "Receitas Simples e Saudáveis",
      image: ReceitasSimples,
      description:
        "Conheça o poder dos alimentos que podem te ajudar a ter uma vida mais saudável!",
      downloadLink: "#",
    },
    {
      title: "Dicas de Como Seguir uma Boa Alimentação",
      image: DicasAlimentacao,
      description: "Refeições, Saladas e Sopas.",
      downloadLink: "#",
    },
  ];
  return (
    <section
      className="container mx-auto px-6 py-16 flex flex-col justify-center"
      id="ebooks"
    >
      <h1 className="text-primary text-[40px] font-bold mb-8 text-center">
        Baixe meus Ebooks e Aprimore Sua Saúde!
      </h1>

      <div className="flex flex-wrap justify-center gap-20 mt-28">
        {ebooks.map((ebook, index) => (
          <Card key={index} {...ebook} />
        ))}
      </div>
    </section>
  );
}
