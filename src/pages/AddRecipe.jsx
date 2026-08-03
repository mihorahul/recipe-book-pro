import { useState } from "react";
import IngredientSection from "../components/IngredientSection";
import StepSection from "../components/StepSection";

function AddRecipe() {
  const [ingredients, setIngredients] = useState([
    {
      name: "",
      quantity: "",
      unit: "",
    },
  ]);

  const [steps, setSteps] = useState([
    {
      title: "",
      description: "",
      quote: "",
    },
  ]);

  function addStep() {
    setSteps([
      ...steps,
      {
        title: "",
        description: "",
        quote: "",
      },
    ]);
  }

  function removeStep(index) {
    setSteps(steps.filter((_, i) => i !== index));
  }

  function handleStepChange(index, field, value) {
    const updated = [...steps];
    updated[index][field] = value;
    setSteps(updated);
  }

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

  function removeIngredient(index) {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);

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
        <IngredientSection
          ingredients={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          handleIngredientChange={handleIngredientChange}
        />
        <StepSection
          steps={steps}
          addStep={addStep}
          removeStep={removeStep}
          handleStepChange={handleStepChange}
        />

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
