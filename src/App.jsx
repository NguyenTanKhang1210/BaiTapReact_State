import React, { useState } from "react";
import ModelDisplay from "./BT_STATE/ModelDisplay.jsx";
import GlassesList from "./BT_STATE/GlassesList.jsx";
import glassesData from "./assets/dataGlasses.json";

const App = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glass) => {
    setSelectedGlasses(glass);
  };

  return (
    <div
      className="min-h-screen text-white p-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('../src/assets/glassesImage/background.jpg')",
      }}
    >
      <h1 className="text-black text-4xl font-bold text-center mb-8">
        TRY GLASSES APP ONLINE
      </h1>
      <div className="flex justify-center gap-16">
        {/* Người mẫu hiển thị kính */}
        <ModelDisplay selectedGlasses={selectedGlasses} />
      </div>
      {/* Danh sách kính */}
      <GlassesList glasses={glassesData} onSelect={handleSelectGlasses} />
    </div>
  );
};

export default App;
