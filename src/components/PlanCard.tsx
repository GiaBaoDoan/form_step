import { useSelector } from "react-redux";
import { PlanOption } from "..";
import type { RootState } from "../store/store";

type planCard = {
  icon: string;
  title: string;
  price: number;
  active: boolean;
  handelDispatch: () => void;
};
const PlanCard = (plan: planCard) => {
  const { icon, price, title, handelDispatch, active } = plan;
  const data = useSelector((state: RootState) => state.plan);
  const checkOption = data.option === PlanOption.YEARLY ? false : true;
  return (
    <div
      onClick={handelDispatch}
      className={`border flex md:flex-col gap-10 transition-all rounded-lg cursor-pointer items-start p-5 ${
        active ? "border-blue-500 bg-blue-50" : "hover:border-blue-500"
      }`}
    >
      <img src={icon} alt="" />
      <div className="md:space-y-2">
        <p className="capitalize font-bold text-blue-950">{title}</p>
        <p className="text-slate-400 md:mb-3 text-sm">
          {!checkOption ? `$${price * 10}/yr` : `$${price}/mo`}
        </p>
        {!checkOption && (
          <span className="font-bold text-blue-950 text-sm">2 months free</span>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
