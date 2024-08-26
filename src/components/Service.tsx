import { useDispatch, useSelector } from "react-redux";
import { setOtion } from "../slice/CountSlice";
import { RootState } from "../store/store";
import { checkOption } from "../utils";

// custom class
const handelClass = (active: boolean) => {
  return active ? "font-bold text-blue-950" : "text-gray-500";
};
// main component
const Service = () => {
  const dispatch = useDispatch();
  const PlanState = useSelector((state: RootState) => state.plan);
  return (
    <section
      onClick={() => dispatch(setOtion(checkOption(PlanState)))}
      className="p-3 bg-blue-50 mt-5 rounded-lg space-x-4 flex justify-center items-center"
    >
      <span className={`${handelClass(checkOption(PlanState))}`}>Mouthly</span>
      <button
        className={`bg-blue-950 p-1 flex text-white items-center transition-all h-6 rounded-full w-12 ${
          checkOption(PlanState) ? "justify-start" : "justify-end"
        }`}
      >
        <span className="w-4 h-4 rounded-full bg-white"></span>
      </button>
      <span className={`${handelClass(!checkOption(PlanState))}`}>Yearly</span>
    </section>
  );
};

export default Service;
