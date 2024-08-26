import { PlanOption } from "..";
import { Addtype } from "../slice/AddSlice";
import { PlanState } from "../slice/CountSlice";
// calulate sum price
const getSumPrice = (A: Addtype[]) =>
  A.reduce((total, num) => {
    return total + num.price;
  }, 0);
// check active card
const checkActive = (id: number, A: Addtype[]) => {
  const res = A.find((item) => item.id === id);
  return res ? true : false;
};
// check option
const checkOption = (A: PlanState) =>
  A.option === PlanOption.YEARLY ? false : true;

export { getSumPrice, checkActive, checkOption };
