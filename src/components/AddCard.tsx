type AddCard = {
  title: string;
  content: string;
  count: string;
  active: boolean;
  handelOnclick: () => void;
};
const AddCard = ({ title, content, count, active, handelOnclick }: AddCard) => {
  return (
    <div
      onClick={handelOnclick}
      className={`border p-3 mt-5 rounded-lg cursor-pointer ${
        active ? "bg-blue-50 border-blue-500" : "hover:border-blue-500  "
      }`}
    >
      <div className="flex gap-10 items-center">
        <input
          onChange={() => {}}
          checked={active}
          type="checkbox"
          className="cursor-pointer w-4 h-4"
        />
        <div className="flex-1">
          <p className="font-bold text-blue-950">{title}</p>
          <p className="text-gray-400 mt-1 text-sm">{content}</p>
        </div>
        <span className="text-blue-700">+${count}/mo</span>
      </div>
    </div>
  );
};

export default AddCard;
