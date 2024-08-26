import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "../schema";
import { formState } from "..";

const useFormSetup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formState>({
    resolver: zodResolver(schema),
  });
  return { register, handleSubmit, errors };
};

export default useFormSetup;
