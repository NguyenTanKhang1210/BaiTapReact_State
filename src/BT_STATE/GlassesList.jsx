import React from "react";

const GlassesList = ({ glasses, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 bg-[#92B7C0]">
      {glasses.map((glass) => (
        <img
          key={glass.id}
          src={glass.url}
          alt={glass.name}
          className="w-20 h-20 object-contain cursor-pointer border-2 border-transparent hover:border-orange-500 transition"
          onClick={() => onSelect(glass)}
        />
      ))}
    </div>
  );
};

export default GlassesList;
