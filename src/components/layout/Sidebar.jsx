import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-lg ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <aside className="w-64 bg-white shadow-lg p-5">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">Recipe Book</h1>

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/recipes" className={linkClass}>
          Recipes
        </NavLink>

        <NavLink to="/add-recipe" className={linkClass}>
          Add Recipe
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
