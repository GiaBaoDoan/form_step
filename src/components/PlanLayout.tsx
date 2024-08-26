import PlanCard from "./PlanCard";
import Service from "./Service";
import { useDispatch, useSelector } from "react-redux";
import { planOne, planThree, planTow } from "../slice/CountSlice";
import { RootState } from "../store/store";
import { PlanType } from "..";

const Plan = () => {
  const dispatch = useDispatch();
  const planState = useSelector((state: RootState) => state.plan);
  return (
    <section>
      <h2 className="text-2xl text-blue-950 font-extrabold">
        Select your plan
      </h2>
      <p className="mt-3 text-gray-500 text-sm">
        You have the option of monthly or yearly billing. Arcade
      </p>
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-10">
        <PlanCard
          handelDispatch={() => dispatch(planOne())}
          icon="/images/icon-arcade.svg"
          price={9}
          title="arcade"
          active={planState.type === PlanType.ARCADE}
        />
        <PlanCard
          handelDispatch={() => dispatch(planTow())}
          icon="/images/icon-advanced.svg"
          price={12}
          title="advanced"
          active={planState.type === PlanType.ADVANCE}
        />
        <PlanCard
          active={planState.type === PlanType.PRO}
          handelDispatch={() => dispatch(planThree())}
          icon="/images/icon-pro.svg"
          price={15}
          title="pro"
        />
      </div>
      <Service />
    </section>
  );
};

export default Plan;
