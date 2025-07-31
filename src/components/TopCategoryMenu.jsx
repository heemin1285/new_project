const categories = [
  "예약상품",
  "굿즈예약",
  "새로운 상품",
  "다운로드 전용",
  "SALE",
  "GOODS",
  "타임특가",
  "이벤트",
];

export default function TopCategoryMenu() {
  return (
    <div className="bg-white border-y py-3">
      <div className="max-w-6xl mx-auto px-4 flex justify-between flex-wrap gap-4 text-sm font-medium">
        {categories.map((item, index) => (
          <button
            key={index}
            className="hover:text-blue-600 transition duration-150"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
