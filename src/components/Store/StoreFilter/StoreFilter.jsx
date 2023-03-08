import React, { useState, useEffect } from "react";
import "./StoreFilter.css";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../store/filter-slice";

const StoreFilter = () => {
  const dispatch = useDispatch();

  const [platforms, setPlatforms] = useState([
    { id: "PC", name: "PC", isSelected: false },
    { id: "Xbox-One", name: "Xbox One", isSelected: false },
    { id: "Xbox-Series-xs", name: "Xbox Series X|S", isSelected: false },
    { id: "Steam", name: "Steam", isSelected: false },
    { id: "DRM-Free", name: "DRM-Free", isSelected: false },
    { id: "Itchio", name: "Itch-io", isSelected: false },
    { id: "Epic-Games-Store", name: "Epic Games Store", isSelected: false },
    { id: "GOG", name: "GOG", isSelected: false },
  ]);

  useEffect(() => {}, [platforms]);

  const handlePlatformSelection = (event) => {
    const platformId = event.target.id;
    const platformIndex = platforms.findIndex((p) => p.id === platformId);
    const updatedPlatforms = [...platforms];
    updatedPlatforms[platformIndex].isSelected = event.target.checked;

    const newPlatforms = updatedPlatforms.map((p) => {
      if (p.id !== platformId) {
        return {
          ...p,
          isSelected: false,
          // dezactivează elementele care nu sunt selectate
          disabled: event.target.checked,
        };
      } else {
        return p;
      }
    });

    setPlatforms(newPlatforms);
    // console.log(updatedPlatforms);
    const selectedPlatforms = newPlatforms
      .filter((p) => p.isSelected)
      .map((p) => p.id);
    // console.log(selectedPlatforms);
    dispatch(filterActions.setPlatformFilter(selectedPlatforms));
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
                disabled={platform.disabled}
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
