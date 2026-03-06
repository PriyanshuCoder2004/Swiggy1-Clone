export default function PlaceCard({ Data }) {
  return (
    <div className="w-full border border-gray-300 p-3 md:p-4 rounded-lg md:rounded-xl text-gray-700 text-center font-semibold shadow-md hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:shadow-lg">
      <a href={Data?.link} className="block w-full h-full">
        <div className="text-sm md:text-base">{Data?.text}</div>
      </a>
    </div>
  );
}