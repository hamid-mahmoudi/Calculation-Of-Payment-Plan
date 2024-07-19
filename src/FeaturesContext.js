import React, { createContext, useState } from 'react';

export const FeaturesContext = createContext();

export const FeaturesProvider = ({ children }) => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  return (
    <FeaturesContext.Provider value={{ selectedFeatures, setSelectedFeatures }}>
      {children}
    </FeaturesContext.Provider>
  );
};