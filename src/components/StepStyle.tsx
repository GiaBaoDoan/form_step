type StepStyle = {
  count: number;
  title: string;
  active: boolean;
};
import { useStore } from "../hook";
import { incrementByAmount } from "../slice/PlanSlice";
const StepStyle = ({ count, title, active }: StepStyle) => {
  const { dispatch } = useStore();
  return (
    <section className="flex items-center gap-5">
      <button
        onClick={() => dispatch(incrementByAmount(count))}
        className={`transition-all border font-bold border-white w-8 h-8 flex justify-center items-center rounded-full ${
          active ? "bg-blue-100 text-blue-900" : "text-white "
        }`}
      >
        <span className="text-sm">{count}</span>
      </button>
      <div className="max-md:hidden">
        <span className="text-gray-300 text-xs uppercase">Step {count}</span>
        <p className="text-white tracking-wider text-sm font-semibold uppercase">
          {title}
        </p>
      </div>
    </section>
  );
};

export default StepStyle;
