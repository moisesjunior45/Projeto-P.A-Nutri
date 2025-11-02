import { FaChevronDown } from "react-icons/fa";

export default function Faq() {
  return (
    <>
      <section className="w-full px-6 py-16 bg-white items-center" id="faq">
        <h1 className="text-primary text-[32px] md:text-[40px] font-bold text-center mb-12">
          Perguntas Frequentes
        </h1>
        <div className="space-y-4">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="
              flex items-center justify-between gap-1.5 rounded-md 
              border-b p-4 cursor-pointer transition-colors
              border-primary text-primary bg-white
              group-open:bg-primary group-open:text-white group-open:border-primary
            "
            >
              <h2 className="text-lg font-medium">
                Como funciona a consulta online?
              </h2>
              <FaChevronDown className="transition-transform group-open:rotate-180" />
            </summary>

            <p className="px-4 pt-4 text-primary">
              As consultas são feitas por videochamada, em plataformas simples e
              seguras. Antes do atendimento, você preenche um questionário para
              que a nutricionista conheça seus hábitos e objetivos.
            </p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="
              flex items-center justify-between gap-1.5 rounded-md 
              border-b p-4 cursor-pointer transition-colors
              border-primary text-primary bg-white
              group-open:bg-primary group-open:text-white group-open:border-primary
            "
            >
              <h2 className="text-lg font-medium">
                Quanto tempo dura a consulta e com que frequência devo retornar?
              </h2>
              <FaChevronDown className="transition-transform group-open:rotate-180" />
            </summary>

            <p className="px-4 pt-4 text-primary">
              Cada consulta dura em média 50 minutos. A frequência varia
              conforme o objetivo, mas geralmente recomenda-se acompanhamento
              mensal.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="
              flex items-center justify-between gap-1.5 rounded-md 
              border-b p-4 cursor-pointer transition-colors
              border-primary text-primary bg-white
              group-open:bg-primary group-open:text-white group-open:border-primary
            "
            >
              <h2 className="text-lg font-medium">
                Onde recebo meu plano alimentar?
              </h2>
              <FaChevronDown className="transition-transform group-open:rotate-180" />
            </summary>

            <p className="px-4 pt-4 text-primary">
              Seu plano é disponibilizado no aplicativo WebDiet, onde você pode
              acessar a dieta, registrar refeições, acompanhar evolução e
              receber atualizações diretamente da nutricionista.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="
              flex items-center justify-between gap-1.5 rounded-md 
              border-b p-4 cursor-pointer transition-colors
              border-primary text-primary bg-white
              group-open:bg-primary group-open:text-white group-open:border-primary
            "
            >
              <h2 className="text-lg font-medium">
                E se eu tiver dúvidas depois da consulta?
              </h2>
              <FaChevronDown className="transition-transform group-open:rotate-180" />
            </summary>

            <p className="px-4 pt-4 text-primary">
              Você terá suporte por WhatsApp ou e-mail para esclarecer dúvidas
              rápidas até o próximo encontro.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="
              flex items-center justify-between gap-1.5 rounded-md 
              border-b p-4 cursor-pointer transition-colors
              border-primary text-primary bg-white
              group-open:bg-primary group-open:text-white group-open:border-primary
            "
            >
              <h2 className="text-lg font-medium">
                Como funciona o pagamento?
              </h2>
              <FaChevronDown className="transition-transform group-open:rotate-180" />
            </summary>

            <p className="px-4 pt-4 text-primary">
              O pagamento é feito de forma antecipada, via PIX, transferência ou
              cartão, garantindo sua vaga na agenda.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
