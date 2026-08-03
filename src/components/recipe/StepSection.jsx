function StepSection({ steps, addStep, removeStep, handleStepChange }) {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Cooking Steps</h2>

        <button
          type="button"
          onClick={addStep}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Step
        </button>
      </div>

      {steps.map((step, index) => (
        <div key={index} className="border rounded-xl p-6 mb-6 bg-slate-50">
          <h3 className="font-bold mb-4">Step {index + 1}</h3>

          <input
            type="text"
            placeholder="Step Title"
            value={step.title}
            onChange={(e) => handleStepChange(index, "title", e.target.value)}
            className="w-full border rounded-lg px-4 py-3 mb-4"
          />

          <textarea
            rows="4"
            placeholder="Step Description"
            value={step.description}
            onChange={(e) =>
              handleStepChange(index, "description", e.target.value)
            }
            className="w-full border rounded-lg px-4 py-3 mb-4"
          />

          <input
            type="text"
            placeholder="Chef Note / Quote"
            value={step.quote}
            onChange={(e) => handleStepChange(index, "quote", e.target.value)}
            className="w-full border rounded-lg px-4 py-3 mb-4"
          />

          <button
            type="button"
            onClick={() => removeStep(index)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete Step
          </button>
        </div>
      ))}
    </div>
  );
}

export default StepSection;
