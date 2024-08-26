import { useStore } from "../hook";
import StepStyle from "./StepStyle";

const StepRps = () => {
  const { counter } = useStore();
  const COUNT_STEP = counter.value;
  return (
    <aside className="relative flex justify-center items-center md:hidden">
      <img
        className="w-full"
        loading="lazy"
        src="/images/bg-sidebar-mobile.svg"
        alt=""
      />
      <nav className="w-full h-full absolute justify-center items-center flex gap-5">
        <StepStyle count={1} active={COUNT_STEP === 1} title="your infor" />
        <StepStyle count={2} active={COUNT_STEP === 2} title="select plan" />
        <StepStyle count={3} active={COUNT_STEP === 3} title="add-ons" />
        <StepStyle count={4} active={COUNT_STEP === 4} title="summary" />
      </nav>
    </aside>
  );
};

export default StepRps;
