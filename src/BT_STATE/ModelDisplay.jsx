import React from "react";
import modelImage from "../assets/glassesImage/model.jpg";

const ModelDisplay = ({ selectedGlasses }) => {
  return (
    <div className="relative text-center w-72 mx-auto">
      {/* Hình ảnh người mẫu */}
      <div className="relative">
        <img src={modelImage} alt="Model" className="w-full" />
        {/* Hình ảnh kính */}
        {selectedGlasses && (
          <img
            src={selectedGlasses.url}
            alt="Selected Glasses"
            className="absolute top-[89px] left-1/2 transform -translate-x-1/2 w-[160px]"
          />
        )}
      </div>
      {/* Thông tin kính */}
      {selectedGlasses && (
        <div className="mt-4 bg-orange-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold">{selectedGlasses.name}</h3>
          <p className="text-sm">{selectedGlasses.desc}</p>
        </div>
      )}
    </div>
  );
};

export default ModelDisplay;
