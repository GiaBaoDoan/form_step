import { useEffect, useState } from "react";

const Thank = () => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    const fn = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => {
      clearTimeout(fn);
    };
  }, []);
  return (
    <section className="flex items-center flex-col justify-center">
      <div className="gap-5 flex flex-col items-center">
        {show && <img src="/images/icon-thank-you.svg" alt="" />}
        <p className="text-blue-950 font-bold text-2xl">Thank you!</p>
        <p className="text-center text-gray-500">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default Thank;
