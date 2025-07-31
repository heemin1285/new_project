import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-4xl font-bold">🎮 Game Store</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-4xl">Home</Link>
        <Link to="/Cart" >Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
