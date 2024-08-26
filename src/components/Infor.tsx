import { formState } from "..";
import Input from "./Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
type TypeInfor = {
  errors?: FieldErrors<formState>;
  register: UseFormRegister<formState>;
};

const Infor = ({ errors, register }: TypeInfor) => {
  return (
    <section>
      <h2 className="text-2xl text-blue-950  font-extrabold">Personal info</h2>
      <p className="mt-3 text-gray-500 text-sm">
        Please provide your name, email, address, and phone number.
      </p>
      <form className="gap-4 flex flex-col mt-5">
        <Input
          name={"name"}
          register={register}
          error={errors?.name}
          type="text"
          label="Name"
          placeholder="e.g. Stephen King"
        />
        <Input
          error={errors?.email}
          name="email"
          register={register}
          type="email"
          label="Email address"
          placeholder="e.g. stephenking@lorem.com Phone"
        />
        <Input
          error={errors?.phone}
          name="phone"
          register={register}
          type="text"
          label="Phone number"
          placeholder="e.g. +1 234 567 890 Next Step"
        />
      </form>
    </section>
  );
};

export default Infor;
