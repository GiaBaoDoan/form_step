import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { checkOption } from "../utils";
type planCard = {
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
const PlanCard = ({ icon, price, title, handelDispatch, active }: planCard) => {
  const planState = useSelector((state: RootState) => state.plan);
  return (
    <section
      onClick={handelDispatch}
      className={`border flex md:flex-col gap-10 transition-all rounded-lg cursor-pointer items-start p-5 ${handelClass(
        active
      )}`}
    >
      <img src={icon} alt="" />
      <div className="md:space-y-2">
        <p className="capitalize font-bold text-blue-950">{title}</p>
        <p className="text-slate-400 md:mb-3 text-sm">
          {!checkOption(planState) ? `$${price * 10}/yr` : `$${price}/mo`}
        </p>
        {!checkOption(planState) && (
          <span className="font-bold text-blue-950 text-sm">2 months free</span>
        )}
      </div>
    </section>
  );
};

export default PlanCard;
