import { incrementByAmount } from "../slice/PlanSlice";
import { checkOption, getSumPrice } from "../utils";
import { useStore } from "../hook";

const Finish = () => {
  const { dispatch, add, plan } = useStore();
  const { option, type, price } = plan;
  const totalPrice = getSumPrice(add);
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
            ${price}/{checkOption(plan) ? "mo" : "yr"}
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
          Total (per {checkOption(plan) ? "Mounth" : "Year"})
        </p>
        <p className="font-bold text-lg text-blue-500">
          ${totalPrice + price}/{checkOption(plan) ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Finish;
