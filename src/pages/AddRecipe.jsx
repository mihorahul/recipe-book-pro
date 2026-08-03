function AddRecipe() {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>

      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">Recipe Name</label>

          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Category</label>

            <input
              type="text"
              placeholder="Cake"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Prep Time</label>

            <input
              type="text"
              placeholder="20 mins"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Cook Time</label>

            <input
              type="text"
              placeholder="40 mins"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Description</label>

          <textarea
            rows="4"
            placeholder="Recipe Description..."
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
