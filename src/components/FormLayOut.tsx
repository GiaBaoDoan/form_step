import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import { Add, Button, Finish, Infor, Plan, Steps, Thank } from "./index.ts";
import { decrement, increment, incrementByAmount } from "../slice/PlanSlice.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schema/index.ts";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { formState } from "../index.ts";

const FormLayOut = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const [confirm, setConfirm] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formState>({
    resolver: zodResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = handleSubmit(() => dispatch(increment()));
  const checkButton = (): React.ReactNode => {
    return count !== 4 ? (
      <Button
        handelSubmit={onSubmit}
        type="button"
        containerStyle="self-end bg-blue-950 px-5 py-3 text-white rounded-lg"
        title="Next step"
      />
    ) : (
      <Button
        handelSubmit={() => {
          onSubmit();
          if (!Object.keys(errors).length) {
            setConfirm(true);
          }
        }}
        type="button"
        containerStyle="self-end bg-blue-950 px-5 py-3 text-white rounded-lg"
        title="Comfirm"
      />
    );
  };
  useEffect(() => {
    if (Object.keys(errors).length) {
      dispatch(incrementByAmount(1));
    }
  }, [errors]);
  return (
    <div className="flex max-md:flex-col bg-white max-w-[64rem] max-md:w-[30rem] justify-end rounded-lg p-3">
      <div className="max-md:hidden">
        <Steps />
      </div>
      <div className="flex flex-col items-center justify-end gap-20 max-md:gap-5 lg:px-10 px-1 py-3">
        <div className="h-[400px] lg:w-[500px] max-md:overflow-y-scroll w-full">
          {confirm ? (
            <Thank />
          ) : (
            <div>
              {count === 1 && <Infor register={register} errors={errors} />}
              {count === 2 && <Plan />}
              {count === 3 && <Add />}
              {count === 4 && <Finish />}
            </div>
          )}
        </div>
        {!confirm && (
          <div
            className={`flex w-full ${
              count === 1 ? "justify-end" : "justify-between"
            }`}
          >
            {count !== 1 && (
              <Button
                handelSubmit={() => dispatch(decrement())}
                type="button"
                containerStyle="text-gray-500  hover:text-blue-900"
                title="Go back"
              />
            )}
            {checkButton()}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormLayOut;
