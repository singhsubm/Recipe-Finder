import React from "react";
import Minirecepie from "./Minirecepie";

export default function Recepie({item}) {
  const [show, setShow] = React.useState(false);
  const viewRecepieHandler = (e) => {
    e.preventDefault();
    console.log(item);
    setShow(true);
    // <Minirecepie item={item} />;
  };
  return (
    <>
      <div
        className="w-full h-full backdrop-blur-2xl border-1 bg-[#e9e3e313] border-[#ffffff79] p-6 rounded-3xl
    flex flex-col gap-6"
      >
        <div className="h-[200px] md:h-[350px] lg:h-[250px] overflow-hidden">
          <img
            src={item.strMealThumb}
            alt=""
            className="rounded-2xl w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col lg:w-full">
            <h2 className="text-2xl md:text-sm w-[70%]  font-semibold ">
              {item.strMeal}
            </h2>
            <p className="opacity-70 text-xs">{item.strArea}</p>
          </div>
          <button
            onClick={viewRecepieHandler}
            className="bg-[#ffebb3] px-8 md:px-12 lg:px-6 py-1 md:py-1 rounded-lg md:text-sm cursor-pointer font-semibold text-black"
          >
            View
          </button>
        </div>
      </div>
      <div>{show && <Minirecepie item={item} setShow={setShow} show={show} />}</div>
    </>
  );
}
