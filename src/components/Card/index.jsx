export default function Card({ title, description, image, downloadLink }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-[338px] h-auto flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-md"
        draggable={false}
      />
      <h2 className="text-lg font-bold mt-5 text-center">{title}</h2>
      <p className="text-sm text-gray-600 mt-3 text-center">{description}</p>
      <a
        href={downloadLink}
        target="_blank"
        className="mt-5 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
      >
        Adquirir Ebook
      </a>
    </div>
  );
}
