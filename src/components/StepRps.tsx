import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import StepStyle from "./StepStyle";

const StepRps = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="relative md:hidden flex justify-center items-center">
      <img
        className="w-full"
        loading="lazy"
        src="/images/bg-sidebar-mobile.svg"
        alt=""
      />
      <div className="w-full h-full absolute justify-center items-center  flex gap-5">
        <StepStyle num={1} active={count === 1} title="your infor" />
        <StepStyle num={2} active={count === 2} title="select plan" />
        <StepStyle num={3} active={count === 3} title="add-ons" />
        <StepStyle num={4} active={count === 4} title="summary" />
      </div>
    </div>
  );
};

export default StepRps;
