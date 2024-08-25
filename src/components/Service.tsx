import { useDispatch, useSelector } from "react-redux";
import { setOtion } from "../slice/CountSlice";
import { RootState } from "../store/store";
import { PlanOption } from "..";

const Service = () => {
  const handelClass = (active: boolean) => {
    return active ? "font-bold text-blue-950" : "text-gray-500";
  };
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.plan);
  const checkOption = data.option === PlanOption.YEARLY ? false : true;
  return (
    <div
      onClick={() => dispatch(setOtion(checkOption))}
      className="p-3 bg-blue-50 mt-5 rounded-lg space-x-4 flex justify-center items-center"
    >
      <span className={`${handelClass(checkOption)}`}>Mouthly</span>
      <button
        className={`bg-blue-950 p-1 flex text-white items-center transition-all h-6 rounded-full w-12 ${
          checkOption ? "justify-start" : "justify-end"
        }`}
      >
        <span className="w-4 h-4 rounded-full bg-white"></span>
      </button>
      <span className={`${handelClass(!checkOption)}`}>Yearly</span>
    </div>
  );
};

export default Service;
