import React, { useState } from "react";

const Feature = ({ name, cost, isSelected, id, sendObject }) => {
  let [isChoose, setIsChoose] = useState(false);

  const handleFeature = () => {
    setIsChoose(!isChoose);
    sendObject(id);
  };

  return (
    <div
      className={`eachFeature ${
        isSelected ? "selectedFeature" : "unSelectedFeature"
      }`}
    >
      <div className="featureStructure">
        <h5>{name}</h5>
        <div className="featureDes">
          <div>
            <i className="bi bi-check"></i>
            <p>لورم ایپسوم متن ساختگی</p>
          </div>
          <div>
            <i className="bi bi-check"></i>
            <p>لورم ایپسوم متن ساختگی</p>
          </div>
          <div>
            <i className="bi bi-check"></i>
            <p>لورم ایپسوم متن ساختگی</p>
          </div>
        </div>
        <span>{cost.toLocaleString()} تومان</span>
      </div>
      <button
        onClick={handleFeature}
        style={{
          backgroundColor: isSelected ? "#d3d3d8" : "#0077b6",
          color: isSelected ? "#0077b6" : "",
        }}
      >
        {isSelected ? "حذف کن" : "اضافه کن"}
      </button>
    </div>
  );
};

export default Feature;
