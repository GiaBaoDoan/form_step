import StepStyle from "./StepStyle";
import { useStore } from "../hook/";

const Steps = () => {
  const { counter } = useStore();
  const COUNT_STEP = counter.value;
  return (
    <aside className="relative max-md:hidden">
      <img
        loading="lazy"
        src="/images/bg-sidebar-desktop.svg"
        className="max-md:hidden"
        alt="bg-sidebar-desktop"
      />
      <nav className="absolute top-10 left-10 flex flex-col gap-5">
        <StepStyle count={1} active={COUNT_STEP === 1} title="your infor" />
        <StepStyle count={2} active={COUNT_STEP === 2} title="select plan" />
        <StepStyle count={3} active={COUNT_STEP === 3} title="add-ons" />
        <StepStyle count={4} active={COUNT_STEP === 4} title="summary" />
      </nav>
    </aside>
  );
};

export default Steps;
