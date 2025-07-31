import { Link } from "react-router-dom";

export default function GameCard({ game, onAdd }) {
  return (
    <div className="border p-4 rounded shadow">
      <Link to={`/game/${game.id}`}>
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover hover:opacity-80 transition"
        />
      </Link>
      <h2 className="mt-2 font-semibold">
        <Link to={`/game/${game.id}`} className="hover:underline">
          {game.title}
        </Link>
      </h2>
      <p>{game.price.toLocaleString()}₩</p>
      <button
        className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
        onClick={() => onAdd(game)}
      >
        장바구니 추가
      </button>
    </div>
  );
}
