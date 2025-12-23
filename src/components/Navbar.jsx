import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand text-white' : 'text-gray-700 hover:bg-gray-100'
  }`;

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-brand text-white font-bold">S2</span>
          <span className="font-semibold text-gray-800">Site dedicado ao cientista e astrônomo norte-americano Carl Sagan</span>
        </div>
        <nav className="flex gap-2">
          <NavLink to="/" className={linkClass} end>Início</NavLink>
          <NavLink to="/curiosidades" className={linkClass}>Curiosidades</NavLink>

        </nav>
      </div>
    </header>
  );
}
