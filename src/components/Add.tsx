import AddCard from "./AddCard";
import { addService } from "../slice/AddSlice";
import { useStore } from "../hook";

const Add = () => {
  const { services, dispatch } = useStore();

  return (
    <div>
      <article>
        <h2 className="text-2xl text-blue-950 font-extrabold">Pick add-ons</h2>
        <p className="mt-3 text-gray-500 text-sm">
          Add-ons help to enhance your gaming experience.
        </p>
      </article>
      {services.map((srv) => {
        const { id, content, extraPrice, title, active } = srv;
        return (
          <AddCard
            key={id}
            handelOnclick={() => dispatch(addService({ id }))}
            active={active}
            content={content}
            extraPrice={extraPrice}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default Add;
