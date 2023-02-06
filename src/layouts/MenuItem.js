import { Link } from "react-router-dom";

export default function MenuItem({ children, active, to }) {
  return (
    <Link
      className={`block py-2 pl-3 pr-4 md:p-0 md:bg-transparent ${
        active ? " hover:text-black" : "text-gray-400"
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
