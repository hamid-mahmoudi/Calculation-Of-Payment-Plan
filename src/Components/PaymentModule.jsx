import React from "react";
const PaymentModule = ({ name, wage, id, totalFeature }) => {
  const base = 15000000;
  const roundUp = (number, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.ceil(number * factor) / factor;
  };
  const total = totalFeature + base + (base * wage) / 100;
  const prePay=total * (40/100)
  const monthlyPay = (total - prePay)/id;

  return (
    <div className="paymentModule">

      <input type="radio" name="check" />
      <div className="modTitle">
        <h5 className="m-0">{name}</h5>
        <span>{wage !== 0 ? `${wage}% کارمزد` : "بدون کارمزد"}</span>
      </div>
      <div className="modCost">
        <span>مبلغ کل</span>
        <span>{total.toLocaleString()}</span>
      </div>
      <div className="modCost">
        <span>قابل پرداخت</span>
        <span>{prePay.toLocaleString()}</span>
      </div>
      <div className="modCost">
        <span>هر قسط</span>
        <span>{roundUp(monthlyPay, -3).toLocaleString()} </span>
      </div>
      <span className="firstWave " />
      <span className="secondWave " />
      <span className="thirdWave " />
    </div>
  );
};

export default PaymentModule;
