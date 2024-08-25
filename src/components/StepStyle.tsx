type StepStyle = {
  num: number;
  title: string;
  active: boolean;
};
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../slice/PlanSlice";
const StepStyle = ({ num, title, active }: StepStyle) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-5">
      <button
        onClick={() => dispatch(incrementByAmount(num))}
        className={`transition-all border font-bold border-white w-8 h-8 flex justify-center items-center rounded-full ${
          active ? "bg-blue-100 text-blue-900" : "text-white "
        }`}
      >
        <span className="text-sm">{num}</span>
      </button>
      <div className="max-md:hidden">
        <span className="text-gray-300 text-xs uppercase">Step {num}</span>
        <p className="text-white tracking-wider text-sm font-semibold uppercase">
          {title}
        </p>
      </div>
    </div>
  );
};

export default StepStyle;
