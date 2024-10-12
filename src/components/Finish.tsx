import { changeStep } from "../slice/PlanSlice";
import { getSumPrice } from "../utils";
import { useStore } from "../hook";

const Finish = () => {
  const { dispatch, services, plan } = useStore();
  const { option, type, price } = plan;
  const filterService = services.filter((srv) => srv.active === true);
  const totalPrice = getSumPrice(filterService);

  return (
    <div>
      <article>
        <h2 className="text-2xl text-blue-950 font-extrabold">Finishing up</h2>
        <p className="mt-2 text-gray-500 text-sm">
          Double-check everything looks OK before confirming.
        </p>
      </article>
      <div className="rounded-lg p-5 bg-blue-50 mt-10 space-y-5">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-blue-950 font-bold">
              {type} ({option})
            </p>
            <button
              onClick={() => dispatch(changeStep(2))}
              className="underline text-sm text-gray-500 hover:text-blue-500"
            >
              Change
            </button>
          </div>
          <p className="font-bold text-lg text-blue-950">
            ${price}/{plan.option ? "mo" : "yr"}
          </p>
        </div>
        {filterService.length > 0 && <hr className="border-gray-300" />}
        {filterService.map((service) => {
          return (
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">{service.title}</p>
              <p className="text-sm text-blue-950 font-semibold">
                +${service.extraPrice}/mo
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center p-5 mt-5 space-y-1">
        <p className="text-gray-500">
          Total (per {plan.option ? "Mounth" : "Year"})
        </p>
        <p className="font-bold text-lg text-blue-500">
          ${totalPrice + price}/{plan.option ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Finish;
