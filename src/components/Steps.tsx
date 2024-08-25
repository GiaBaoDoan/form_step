import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import StepStyle from "./StepStyle";

const Steps = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="relative">
      <img
        loading="lazy"
        src="/images/bg-sidebar-desktop.svg"
        className="max-md:hidden"
        alt=""
      />
      <div className="absolute top-10 left-10 flex flex-col gap-5">
        <StepStyle num={1} active={count === 1} title="your infor" />
        <StepStyle num={2} active={count === 2} title="select plan" />
        <StepStyle num={3} active={count === 3} title="add-ons" />
        <StepStyle num={4} active={count === 4} title="summary" />
      </div>
    </div>
  );
};

export default Steps;
