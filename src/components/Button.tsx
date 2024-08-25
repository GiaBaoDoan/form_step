type buttonType = {
  title: string;
  containerStyle?: string;
  type: "button" | "submit";
  handelSubmit?: () => void;
};

const Button = (buttonProps: buttonType) => {
  const { containerStyle, type, title, handelSubmit } = buttonProps;
  return (
    <button onClick={handelSubmit} type={type} className={`${containerStyle}`}>
      {title}
    </button>
  );
};

export default Button;
