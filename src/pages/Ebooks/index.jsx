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
      subtitle: "Aprenda a montar pratos saudáveis com equilíbrio.",
      image: HealthyPlate,
      downloadLink: "https://example.com/manual-introducao-alimentar",
    },
    {
      title: "Receitas simples e saudáveis",
      subtitle:
        "Descubra receitas leves e nutritivas para o dia a dia. Simples, saboroso e saudável.",
      image: SimpleRecipes,
      downloadLink: "https://example.com/receitas-simples",
    },
    {
      title: "Evite o desperdício de alimentos!",
      subtitle:
        "Aprenda a evitar desperdícios e montar pratos saudáveis na medida certa.",
      image: AvoidWaste,
      downloadLink: "https://example.com/evite-desperdicio",
    },
  ];

  return (
    <section
      className="w-full px-6 py-16 bg-white flex flex-col items-center"
      id="ebooks"
    >
      <h1 className="text-primary text-[32px] md:text-[40px] font-bold text-center mb-12">
        Baixe Nossos Ebooks e Aprimore Sua Saúde!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {ebooks.map((ebook, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 transition hover:shadow-xl"
          >
            <img
              src={ebook.image}
              alt={ebook.title}
              className="w-full h-full object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
              {ebook.title}
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              {ebook.subtitle}
            </p>
            <a
              href={ebook.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-primary text-white px-4 py-2 rounded transition"
            >
              Baixar Ebook
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
