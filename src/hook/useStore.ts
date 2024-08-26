import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

const useStore = () => {
  const store = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  return { dispatch, ...store };
};
export default useStore;
