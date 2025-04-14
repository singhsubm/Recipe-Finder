import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { setSelectedRecepie } from "../redux/slices/features/selectedRecepie";
import { setViewMore } from "../redux/slices/features/viewMore";
import { useDispatch } from "react-redux";

export default function Minirecepie({
  item,
  setShow,
  show,
}) {
  const dispatch = useDispatch();
  const viewmoreHandler = () => {
    dispatch(setSelectedRecepie(item));
    setShow(false);
    dispatch(setViewMore(true));
  };

  const youtubeHandler = () => {
    window.open(item.strYoutube, "_blank");
  };

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="minirecepie bg-[#000000a5] backdrop-blur-xs w-full min-h-screen overflow-hidden fixed z-10 top-0 left-0 py-10 px-10 md:flex md:gap-4 md:justify-center"
        >
          <IoMdCloseCircleOutline
            onClick={() => setShow(false)}
            className="text-4xl text-[#ffebb3] mb-10 cursor-pointer"
          />
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full md:w-[70%] h-full backdrop-blur-2xl border-1 bg-[#e9e3e313] border-[#ffffff79] p-6 rounded-3xl flex flex-col gap-6 md:p-10"
          >
            <div className="h-[200px] md:h-[350px] overflow-hidden">
              <img
                src={item.strMealThumb}
                alt=""
                className="rounded-2xl w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-4xl font-semibold">
                  {item.strMeal}
                </h2>
                <p className="opacity-70 text-sm md:text-lg mb-3">
                  {item.strArea}
                </p>
                <h2>Category: {item.strCategory}</h2>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={viewmoreHandler}
                    className="bg-[#ffebb3] px-6 md:px-12 py-3 md:py-3 rounded-lg text-xs md:text-xl cursor-pointer font-semibold text-black"
                  >
                    View More
                  </button>
                  <button
                    onClick={youtubeHandler}
                    className="flex items-center gap-2 bg-red-500 px-6 md:px-12 py-2 md:py-3 rounded-lg md:text-xl text-xs cursor-pointer font-semibold"
                  >
                    <FaYoutube className="inline text-2xl" />
                    Youtube
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
