export default function Button() {
  return (
    <button
      onClick={() =>
        window.open(
          "https://api.whatsapp.com/send/?phone=558189147221&text&type=phone_number&app_absent=0",
          "_blank"
        )
      }
      className="inline-block rounded-full bg-white border border-primary px-12 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-white hover:border-white focus:ring-3 focus:ring-secondary focus:outline-hidden cursor-pointer"
    >
      AGENDE SUA CONSULTA
    </button>
  );
}
