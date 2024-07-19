import React, { useContext } from "react";
import Feature from "./Feature";
import { getFeatures } from "../data/data";
import { NavLink } from "react-router-dom";
import { FeaturesContext } from "../FeaturesContext";

const SelectFeatures = () => {
  let features = getFeatures();
  const { selectedFeatures, setSelectedFeatures } = useContext(FeaturesContext);

  const sendObject = (featureId) => {
    setSelectedFeatures((prevSelectedFeatures) => {
      if (prevSelectedFeatures.includes(featureId)) {
        return prevSelectedFeatures.filter((id) => id !== featureId);
      } else {
        return [...prevSelectedFeatures, featureId];
      }
    });
  };

  console.log(selectedFeatures);

  return (
    <div>
      <h3 className="featureTitle">مایلید چه امکانی را اضافه کنید؟</h3>
      <div className="featuresList">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            name={feature.name}
            cost={feature.cost}
            sendObject={sendObject}
            object={selectedFeatures}
            id={feature.id}
            isSelected={selectedFeatures.includes(feature.id)} // Pass the selection status
          />
        ))}
      </div>
      <div>
        <NavLink to={"/features"} className={"prvStep"}>
          <span>مرحله قبل</span>{" "}
          <i className="bi bi-box-arrow-left"></i>
        </NavLink>
        <NavLink to={"/payment"} className={"nextStep"}>
          <i className="bi bi-box-arrow-in-right"></i>
          <span>مرحله بعد</span>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default SelectFeatures;