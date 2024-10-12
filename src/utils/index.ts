import { Service } from "../slice/AddSlice";

// calulate sum price
const getSumPrice = (arr: Service[]) =>
  arr.reduce((total, num) => {
    return total + num.extraPrice;
  }, 0);

export { getSumPrice };
