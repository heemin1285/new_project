import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import games from "../data/games";

export default function GameDetail({ onAdd }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("review");
  const [reviews, setReviews] = useState([
    { name: "RIO", text: "게임 기대 됩니다!!" },
  ]);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [edition, setEdition] = useState("일반판");

  const game = games.find((g) => g.id === parseInt(id));
  if (!game)
    return (
      <div className="p-8 text-center text-gray-600">
        게임을 찾을 수 없습니다.
      </div>
    );

  const handleBuyNow = () => {
    onAdd(game);
    navigate("/order", { state: { game } });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewName && reviewText) {
      const newReview = { name: reviewName, text: reviewText };
      setReviews([newReview, ...reviews]);
      setReviewName("");
      setReviewText("");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 text-gray-900 font-sans">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* 좌측: 이미지 및 영상 */}
        <div className="flex-1 space-y-6">
          <img
            src={game.image}
            alt={game.title}
            className="w-full rounded-xl shadow-md"
          />
          <div className="grid grid-cols-3 gap-4">
            <img
              src={game.image2}
              alt="sub"
              className="w-full rounded-xl shadow-md"
            />
          </div>
          {game.video && (
            <div className="mt-6">
              <iframe
                src={`${game.video}?rel=0`}
                title="Game Trailer"
                style={{ width: "100%", height: "480px" }}
                className="rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* 우측: 게임 정보 */}
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-3">{game.title}</h1>
            <p className="text-2xl text-red-500 font-semibold mb-6">
              {game.price.toLocaleString()}₩
            </p>
            <p className="text-base text-gray-700 mb-8">{game.description}</p>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                에디션 선택
              </label>
              <select
                value={edition}
                onChange={(e) => setEdition(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option value="한정판">한정판</option>
                <option value="일반판">일반판</option>
                <option value="예약판">예약판</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => onAdd(game)}
              className="w-full bg-black text-white py-4 text-lg rounded-md hover:bg-gray-800 transition"
            >
              장바구니 담기
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full border border-black py-4 text-lg rounded-md hover:bg-gray-100 transition"
            >
              바로 구매
            </button>
          </div>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="mt-20 border-t pt-10">
        <div className="flex gap-8 mb-8 border-b pb-4">
          {[
            ["review", "리뷰"],
            ["inquiry", "상품문의"],
            ["exchange", "교환/환불"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`text-base pb-2 ${
                tab === key
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 리뷰 작성 탭 */}
        {tab === "review" && (
          <div>
            <h3 className="text-xl font-bold mb-6">리뷰 작성</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-6 mb-10">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  placeholder="이름을 입력하세요"
                  required
                  className="w-full border border-gray-300 rounded p-3"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  리뷰 내용
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="리뷰를 작성해주세요."
                  required
                  className="w-full border border-gray-300 rounded-lg p-4 h-52 text-base resize-none focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                >
                  등록
                </button>
              </div>
            </form>

            <div>
              <h4 className="text-base font-semibold mb-4">작성된 리뷰</h4>
              {reviews.length === 0 ? (
                <p className="text-gray-500 text-sm">리뷰가 없습니다.</p>
              ) : (
                reviews.map((rev, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded p-4 mb-4 bg-gray-50"
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{rev.name}</span>
                      <span className="text-gray-400">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-800 text-sm">{rev.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* 상품문의 탭 */}
        {tab === "inquiry" && (
          <p className="text-base text-gray-700">
            상품에 대한 문의는 고객센터 또는 1:1 채팅을 이용해주세요.
          </p>
        )}

        {/* 교환/환불 탭 */}
        {tab === "exchange" && (
          <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
            <li>수령 후 7일 이내 교환/반품 가능</li>
            <li>단순 변심 시 왕복 배송비 부담</li>
            <li>제품 훼손 시 교환/반품 불가</li>
          </ul>
        )}
      </div>
    </div>
  );
}
