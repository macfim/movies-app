
const Navbar = () => {

  return (
    <nav>
      <ul className="flex gap-6 text-sm font-bold">
        <li className="text-blue-700 hover:text-blue-800">
          <button>
            All
          </button>
        </li>
        <li className="text-blue-700 hover:text-blue-800">
          <button>
            Top 100
          </button>
        </li>
        <li className="text-blue-700 hover:text-blue-800">
          <button>
            Worst 100
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
