import AddCard from "./AddCard";
import { addAction } from "../slice/AddSlice";
import { checkActive } from "../utils";
import { useStore } from "../hook";

const Add = () => {
  const { add, dispatch } = useStore();
  const handelDispatch = (id: number, price: number, title: string) => {
    dispatch(
      addAction({
        id,
        price,
        title,
      })
    );
  };
  return (
    <div>
      <h2 className="text-2xl text-blue-950 font-extrabold">Pick add-ons</h2>
      <p className="mt-3 text-gray-500 text-sm">
        Add-ons help to enhance your gaming experience.
      </p>
      <AddCard
        handelOnclick={() => handelDispatch(1, 1, "Online service")}
        active={checkActive(1, add)}
        content="Access to multiplayer games"
        count="1"
        title="Online service"
      />
      <AddCard
        handelOnclick={() => handelDispatch(2, 2, "Larger storage")}
        active={checkActive(2, add)}
        content="Extra 1TB cloud save"
        count="2"
        title="Larger storage"
      />
      <AddCard
        handelOnclick={() => handelDispatch(3, 3, "Customizable profile")}
        active={checkActive(3, add)}
        content="Custom theme on your profile"
        count="2"
        title="Customizable profile"
      />
    </div>
  );
};

export default Add;
