import { Route, Routes } from "react-router-dom";
import GameDetail from "./pages/GameDetail";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import OrderPage from "./pages/OrderPage";
import './App.css'; 

function App() {
  const [cart, setCart] = useState(() => {
    // 초기값을 로컬 스토리지에서 가져오기
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // 로컬 스토리지에 cart 상태 저장
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 장바구니에 중복 없이 추가
  const handleAddToCart = (game) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.some((item) => item.id === game.id);
      if (isAlreadyInCart) return prevCart; // 이미 있으면 추가 안 함
      return [...prevCart, game];
    });
  };

  // 장바구니에서 하나 제거
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === id);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1);
        return newCart;
      }
      return prevCart;
    });
  };

  // 장바구니 비우기
  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home onAdd={handleAddToCart} />} />
        <Route path="/game/:id" element={<GameDetail onAdd={handleAddToCart} />} />
        <Route path="/order" element={<OrderPage />} />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cart={cart} 
              onRemove={handleRemoveFromCart} 
              onClear={handleClearCart} 
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
