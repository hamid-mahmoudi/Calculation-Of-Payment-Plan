let featuresList = [
  {
    name: "بلاگ",
    cost: 2000000,
    id: 1,
  },
  {
    name: "فروشگاه",
    cost: 3500000,
    id: 2,
  },
  {
    name: "ادمین",
    cost: 4000000,
    id: 3,
  },
];
let paymentPlans = [
  {
    name: "یک ماهه ",
    wage: 0,
    id: 1,
  },
  {
    name: "دو ماهه ",
    wage: 4,
    id:2,
  },
  {
    name: "سه ماهه ",
    wage: 8,
    id:3,
  },
  
];
export const getFeatures = () => {
  return featuresList;
};
export const getPlans = ()=>{
    return paymentPlans
}