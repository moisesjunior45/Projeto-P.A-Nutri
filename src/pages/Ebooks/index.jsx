import Card from "../../components/Card";

// Covers
import HealthyPlate from "../../assets/images/covers/healthy-plate.jpeg";
import AvoidWaste from "../../assets/images/covers/avoid-waste.jpeg";
import WashHands from "../../assets/images/covers/wash-your-hands.jpeg";
import SimpleRecipes from "../../assets/images/covers/simple-recipes.jpg";

export default function Ebook() {
  const ebooks = [
    {
      title: "Como Montar um Prato Saudável",
      image: HealthyPlate,
      description:
        "Aprenda a montar pratos saudáveis com equilíbrio entre vegetais, proteínas e carboidratos. Simples, prático e nutritivo.",
      downloadLink: "https://example.com/como-montar-um-prato-saudavel",
    },
    {
      title: "Evite o desperdício de alimentos!",
      image: AvoidWaste,
      description:
        "Aprenda a evitar desperdícios e montar pratos saudáveis na medida certa. Prático, consciente e nutritivo.",
      downloadLink: "https://example.com/evite-desperdicio",
    },
    {
      title: "Higiene na alimentação",
      image: WashHands,
      description:
        "Adote hábitos de higiene para garantir refeições mais seguras. ",
      downloadLink: "https://example.com/higiene-na-alimentacao",
    },
    {
      title: "Receitas simples e saudáveis",
      image: SimpleRecipes,
      description:
        "Descubra receitas leves e nutritivas para o dia a dia. Simples, saboroso e saudável.",
      downloadLink: "https://example.com/receitas-simples",
    },
  ];
  return (
    <section
      className="min-h-screen flex items-center justify-center flex-col px-6 py-16"
      id="ebooks"
    >
      <h1 className="text-primary text-[40px] font-bold mb-8 text-center">
        Baixe meus Ebooks e Aprimore Sua Saúde!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 gap-x-50 justify-center">
        {ebooks.map((ebook, index) => (
          <Card key={index} {...ebook} />
        ))}
      </div>
    </section>
  );
}
