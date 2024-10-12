import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import React from "react";

type PlanCard = {
  icon: string;
  title: string;
  price: number;
  active: boolean;
  handelDispatch: () => void;
};

// handel class
const handelClass = (active: boolean) =>
  active ? "border-blue-500 bg-blue-50" : "hover:border-blue-500";

// main component
const PlanCard: React.FC<PlanCard> = ({
  icon,
  price,
  title,
  handelDispatch,
  active,
}) => {
  const plan = useSelector((state: RootState) => state.plan);

  return (
    <section
      onClick={handelDispatch}
      className={`border flex md:flex-col gap-10 transition-all rounded-lg cursor-pointer items-start p-5 ${handelClass(
        active
      )}`}
    >
      <img src={icon} alt="icon" />
      <div className="md:space-y-2">
        <p className="capitalize font-bold text-blue-950">{title}</p>
        <p className="text-slate-400 md:mb-3 text-sm">
          {plan.option ? `$${price * 10}/yr` : `$${price}/mo`}
        </p>
        {plan.option && (
          <span className="font-bold text-blue-950 text-sm">2 months free</span>
        )}
      </div>
    </section>
  );
};

export default PlanCard;
