import { Link } from "react-router-dom";
import games from "../data/games";

export default function Home({ onAdd }) {
  return (
        <div className="max-w-7xl mx-auto px-4 py-8">

    
    
    
    
      {/* ✅ 상단 배너 */}
      <div
        className="bg-cover bg-center rounded-xl text-white py-20 px-6 mb-10"
        style={{
          backgroundImage: `url("https://source.unsplash.com/1600x600/?xbox,playstation")`,
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
            🎮 재밌고 다양한게임들을 만나보세요
          </h1>
          <h1 className="text-lg mb-6 drop-shadow-sm">
            신작부터 인기작까지, 다양한 게임이 준비되어 있습니다.
          </h1>
          <h1 className="text-lg mb-6 drop-shadow-sm">
            많이 구매하시면 추가 할인이 있습니다!! 지금 당장 구매하세요~~~~!!
          </h1>
        </div>
      </div>

      {/* ✅ 게임 목록 */}
      <h1
        id="games"
        className="text-2xl font-bold mb-6 text-gray-800 text-center"
      >
        Best 5
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        {games.slice(0, 9).map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
          >
            <img
              src={game.image}
              alt={game.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {game.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {game.price.toLocaleString()}₩
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => onAdd(game)}
                  className="flex-1 px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                >
                  장바구니
                </button>
                <Link
                  to={`/game/${game.id}`}
                  className="flex-1 px-3 py-2 bg-blue-500 text-white text-middle rounded text-center hover:bg-blue-600"
                >
                  상세정보
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
