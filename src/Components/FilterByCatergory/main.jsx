import { useState } from "react";
import { categories, content } from "./data";

const CreateCategory = () => {
  const original = [...content];
  const [filter, setFilter] = useState(original);

  function filterCardsByCategory(category) {
    if (category === "All") {
      setFilter(original);
    } else {
      const filtered = original.filter((item) => item.id === category);
      setFilter(filtered);
    }
  }

  return (
    <div>
      <div className="flex justify-center gap-10 m-10">
        {categories.map((category, index) => (
          <button
            key={`${index}${category}`}
            onClick={() => filterCardsByCategory(category)}
            className="border-2 border-rose-500 p-1 bg-purple-700 text-cyan-200 text-xl w-24"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        {filter.map((item, index) => (
          <div key={index} className="w-[100px] h-[100px] bg-red-300">
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCategory;
