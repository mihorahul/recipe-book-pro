import { useState } from "react";

function AddRecipe() {
  const [ingredients, setIngredients] = useState([
    {
      name: "",
      quantity: "",
      unit: "",
    },
  ]);

  function addIngredient() {
    setIngredients([
      ...ingredients,
      {
        name: "",
        quantity: "",
        unit: "",
      },
    ]);
  }

  function handleIngredientChange(index, field, value) {
    const updatedIngredients = [...ingredients];

    updatedIngredients[index][field] = value;

    setIngredients(updatedIngredients);
  }

  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>

      <form className="space-y-6">
        {/* Recipe Name */}
        <div>
          <label className="block mb-2 font-semibold">Recipe Name</label>

          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {/* Category, Prep Time, Cook Time */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Category</label>

            <input
              type="text"
              placeholder="Category"
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

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold">Description</label>

          <textarea
            rows="4"
            placeholder="Recipe Description..."
            className="w-full border rounded-lg px-4 py-3"
          ></textarea>
        </div>

        {/* Ingredients */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Ingredients</h2>

            <button
              type="button"
              onClick={addIngredient}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              + Add Ingredient
            </button>
          </div>

          {ingredients.map((ingredient, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Ingredient Name"
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(index, "name", e.target.value)
                }
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, "quantity", e.target.value)
                }
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                placeholder="Unit"
                value={ingredient.unit}
                onChange={(e) =>
                  handleIngredientChange(index, "unit", e.target.value)
                }
                className="border rounded-lg px-4 py-3"
              />
            </div>
          ))}
        </div>

        <pre className="bg-slate-100 p-4 rounded mt-6">
          {JSON.stringify(ingredients, null, 2)}
        </pre>

        {/* Save Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
