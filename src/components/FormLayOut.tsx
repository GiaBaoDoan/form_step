import { Add, Button, Finish, Infor, Plan, Steps, Thank } from "./index.ts";
import { decrement, increment, incrementByAmount } from "../slice/PlanSlice.ts";
import { useEffect, useState } from "react";
import { useFormSetup, useStore } from "../hook";
const FormLayOut = () => {
  const { errors, handleSubmit, register } = useFormSetup();
  const { dispatch, counter } = useStore();
  const COUNT_STEP = counter.value;
  const [confirm, setConfirm] = useState<boolean>(false);
  const onSubmit = handleSubmit(() => {
    dispatch(increment());
    if (COUNT_STEP === 4 && !Object.keys(errors).length) {
      setConfirm(true);
    }
  });
  const renderContent = () => {
    if (confirm) return <Thank />;
    switch (COUNT_STEP) {
      case 1:
        return <Infor register={register} errors={errors} />;
      case 2:
        return <Plan />;
      case 3:
        return <Add />;
      case 4:
        return <Finish />;
      default:
        return null;
    }
  };
  const renderButtons = () => {
    if (confirm) return null;
    return (
      <div
        className={`flex w-full ${
          COUNT_STEP === 1 ? "justify-end" : "justify-between"
        }`}
      >
        {COUNT_STEP !== 1 && (
          <Button
            handelSubmit={() => dispatch(decrement())}
            type="button"
            containerStyle="text-gray-500 hover:text-blue-900"
            title="Go back"
          />
        )}
        <Button
          handelSubmit={onSubmit}
          type="button"
          containerStyle="self-end bg-blue-950 px-5 py-3 text-white rounded-lg"
          title={COUNT_STEP !== 4 ? "Next step" : "Confirm"}
        />
      </div>
    );
  };
  useEffect(() => {
    if (Object.keys(errors).length) {
      dispatch(incrementByAmount(1));
    }
  }, [errors]);
  return (
    <main className="flex max-md:flex-col bg-white max-w-[64rem] max-md:w-[30rem] justify-end rounded-lg p-3">
      <Steps />
      <div className="flex flex-col items-center justify-end gap-20 max-md:gap-5 lg:px-10 px-1 py-3">
        <div className="h-[400px] lg:w-[500px] max-md:overflow-y-scroll w-full">
          {renderContent()}
        </div>
        {renderButtons()}
      </div>
    </main>
  );
};

export default FormLayOut;
