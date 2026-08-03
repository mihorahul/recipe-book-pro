function Dashboard() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome Rahul 👋</h1>

          <p className="text-gray-500">Manage your recipes here.</p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
          + Add Recipe
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">Recipes</h2>
          <p className="text-4xl font-bold mt-3">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">Categories</h2>
          <p className="text-4xl font-bold mt-3">0</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold">Images</h2>
          <p className="text-4xl font-bold mt-3">0</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
