function IngredientSection({
  ingredients,
  addIngredient,
  removeIngredient,
  handleIngredientChange,
}) {
  return (
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
        <div key={index} className="grid grid-cols-4 gap-4 mb-4">
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

          <button
            type="button"
            onClick={() => removeIngredient(index)}
            className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default IngredientSection;
