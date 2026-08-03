function Navbar() {
  return (
    <header className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border rounded-lg px-4 py-2 w-72 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          R
        </div>
      </div>
    </header>
  );
}

export default Navbar;
