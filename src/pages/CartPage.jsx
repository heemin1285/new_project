export default function CartPage({ cart, onRemove, onClear }) {
  const total = cart.reduce((sum, game) => sum + game.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">장바구니</h2>

      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="border-b py-2 flex justify-between items-center">
                <span>
                  {item.title} - ₩{item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-4 font-bold">총합: {total.toLocaleString()}₩</p>

          <button
            onClick={onClear}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            장바구니 전체 비우기
          </button>
        </>
      )}
    </div>
  );
}
