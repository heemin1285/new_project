import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function OrderPage() {
  const location = useLocation();
  const game = location.state?.game;

  const [orderInfo, setOrderInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, phone, address } = orderInfo;
    if (!name || !phone || !address) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    // 실제 결제 로직으로 교체 가능
    console.log("✅ 주문 완료:", {
      game,
      주문자정보: orderInfo,
    });

    alert("구매해주셔서 감사합니다!! 앞으로 자주 이용해주세요~");
  };

  if (!game) {
    return <div className="p-4">주문할 게임 정보가 없습니다.</div>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">주문서</h1>

      {/* 게임 정보 */}
      <div className="mb-6 border p-4 rounded shadow-sm">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-60 object-cover rounded"
        />
        <h2 className="text-xl font-semibold mt-4">{game.title}</h2>
        <p className="mt-2 text-gray-600">{game.description}</p>
        <p className="mt-2 text-lg font-bold">{game.price.toLocaleString()}₩</p>
      </div>

      {/* 주문자 정보 입력 */}
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">주문자 이름</label>
          <input
            type="text"
            name="name"
            value={orderInfo.name}
            onChange={handleChange}
            placeholder="홍길동"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">전화번호</label>
          <input
            type="tel"
            name="phone"
            value={orderInfo.phone}
            onChange={handleChange}
            placeholder="010-1234-5678"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">배송지 주소</label>
          <input
            type="text"
            name="address"
            value={orderInfo.address}
            onChange={handleChange}
            placeholder="서울시 강남구 역삼동 123-45"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          결제하기
        </button>
      </div>
    </div>
  );
}
