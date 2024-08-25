import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PlanOption } from "..";
import { incrementByAmount } from "../slice/PlanSlice";

const Finish = () => {
  const { add, plan } = useSelector((state: RootState) => state);
  const { option, type, price } = plan;
  const checkOption = plan.option === PlanOption.YEARLY ? false : true;
  const dispatch = useDispatch();
  const totalPrice = add.reduce((total, num) => {
    return total + num.price;
  }, 0);
  return (
    <div>
      <h2 className="text-2xl text-blue-950 font-extrabold">Finishing up</h2>
      <p className="mt-2 text-gray-500 text-sm">
        Double-check everything looks OK before confirming.
      </p>
      <div className="rounded-lg p-5 bg-blue-50 mt-10 space-y-5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-blue-950 font-bold">
              {type} ({option})
            </p>
            <button
              onClick={() => dispatch(incrementByAmount(2))}
              className="underline text-sm text-gray-500 hover:text-blue-500"
            >
              Change
            </button>
          </div>
          <p className="font-bold text-lg text-blue-950">
            ${price}/{!checkOption ? "yr" : "mo"}
          </p>
        </div>
        {add.length > 0 && <hr className="border-gray-300" />}
        {add.map((item) => {
          return (
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-sm text-blue-950 font-semibold">
                +${item.price}/mo
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center p-5 mt-5 space-y-1">
        <p className="text-gray-500">
          Total (per {!checkOption ? "Year" : "Mounth"})
        </p>
        <p className="font-bold text-lg text-blue-500">
          ${totalPrice + price}/{checkOption ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Finish;
