import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-1 bg-gray-100 flex border-b-4 space-x-4">
      <Link to="/" className="bg-blue-100 p-2 hover:bg-blue-300">
        Home
      </Link>
      <Link to="/team" className="bg-blue-100 p-2 hover:bg-blue-300">
        Team
      </Link>
      <Link to="/about" className="bg-blue-100 p-2 hover:bg-blue-300">
        About
      </Link>
    </div>
  );
}

export default Navbar;
