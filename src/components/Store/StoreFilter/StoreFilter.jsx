import React, { useState } from "react";
import "./StoreFilter.css";

const StoreFilter = () => {
  const [platforms, setPlatforms] = useState([
    { id: "PC", name: "PC", isSelected: false },
    { id: "Xbox One", name: "Xbox One", isSelected: false },
    { id: "Xbox Series X|S", name: "Xbox Series X|S", isSelected: false },
    { id: "Steam", name: "Steam", isSelected: false },
    { id: "DRM-Free", name: "DRM-Free", isSelected: false },
    { id: "Itch.io", name: "Itch.io", isSelected: false },
    { id: "Epic Games Store", name: "Epic Games Store", isSelected: false },
    { id: "GOG", name: "GOG", isSelected: false },
  ]);

  const handlePlatformSelection = (event) => {
    const updatedPlatforms = platforms.map((platform) => {
      if (platform.id === event.target.id) {
        console.log(event.target.id);
        console.log(platform.id);
        platform.isSelected = event.target.checked;
      }
      return platform;
    });
    setPlatforms(updatedPlatforms);
    console.log(updatedPlatforms);
  };

  return (
    <div className="store-filter">
      <div className="store-plat">
        <p style={{ color: "#fc8b33" }}>Platforms</p>
        <div>
          {platforms.map((platform) => (
            <div key={platform.id}>
              <input
                type="checkbox"
                id={platform.id}
                name={platform.name}
                onChange={handlePlatformSelection}
                checked={platform.isSelected}
              />
              <label style={{ marginLeft: "10px" }} htmlFor={platform.id}>
                {platform.name}
              </label>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreFilter;
