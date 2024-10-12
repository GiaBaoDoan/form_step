import PlanCard from "./PlanCard";
import Service from "./Service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PlanType } from "..";
import { setPlan } from "../slice/CountSlice";
import data from "../data/data.json";

interface typeArg {
  price: number;
  type: PlanType;
}

const Plan = () => {
  const dispatch = useDispatch();
  const planState = useSelector((state: RootState) => state.plan);
  const handleSetPlan = (planState: typeArg) => {
    return dispatch(setPlan(planState));
  };

  return (
    <section>
      <article>
        <h2 className="text-2xl text-blue-950 font-extrabold">
          Select your plan
        </h2>
        <p className="mt-3 text-gray-500 text-sm">
          You have the option of monthly or yearly billing. Arcade
        </p>
      </article>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-10">
        {data.plans.map((plan, index) => {
          return (
            <PlanCard
              key={index}
              title={plan.title}
              icon={plan.logo}
              price={plan.priceMonthly}
              active={planState.type === plan.title}
              handelDispatch={() =>
                handleSetPlan({
                  price: plan.priceMonthly,
                  type: PlanType[plan.title as keyof typeof PlanType],
                })
              }
            />
          );
        })}
      </div>
      <Service />
    </section>
  );
};

export default Plan;
