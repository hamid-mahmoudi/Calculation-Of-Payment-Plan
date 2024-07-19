import React, { useContext } from "react";
import PaymentModule from "./PaymentModule";
import { getPlans } from "../data/data";
import { FeaturesContext } from "../FeaturesContext";
import { NavLink } from "react-router-dom";
import { getFeatures } from "../data/data";

const Payment = () => {
  const { selectedFeatures } = useContext(FeaturesContext);
  let payPlans = getPlans();
  let features = getFeatures();
  let totalFeature = 0;
  for (let i = 0; i < features.length; i++) {
    if (selectedFeatures.includes(features[i].id) && features[i]) {
      totalFeature += features[i].cost;
    }
  }

  console.log(totalFeature);
  return (
    <div className="">
      <div>
        <div className="featureStore">
          <h3>آنچه افزوده اید:</h3>
          {selectedFeatures.map((featureId) => {
            const feature = features.find((f) => f.id === featureId);
            return (
              <div className="addedFeature" key={featureId}>
                {feature ? feature.name : "Feature not found"}
              </div>
            );
          })}
        </div>
        <div className="paymentList">
          {payPlans.map((plan) => (
            <PaymentModule
              key={plan.id}
              name={plan.name}
              wage={plan.wage}
              id={plan.id}
              totalFeature={totalFeature}
            />
          ))}
        </div>
      </div>
      <div>
        <NavLink to={"/features"} className={"prvStep"}>
          <span>مرحله قبل</span> <i className="bi bi-box-arrow-left"></i>
        </NavLink>
        <NavLink to={"/payment"} className={"nextStep"}>
          <i className="bi bi-box-arrow-in-right"></i>
          <span>مرحله بعد</span>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Payment;
