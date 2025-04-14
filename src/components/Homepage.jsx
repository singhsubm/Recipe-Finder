import React from "react";
import Spinner from "./Spinner";
import Recepie from "./Recepie";
import Popularrecepie from "./Popularrecepie";
import Popularindianrecepie from "./Popularindianrecepie";
import { useSelector } from "react-redux";

export default function Homepage({
  data,
  loading,
  setSelectedRecepie,
  setViewmore,
}) {
  const { search } = useSelector((state) => state.search);
  const firstsix = Array.isArray(data)? data.slice(0, 6): [];
  const remaining = Array.isArray(data)? data.slice(6): [];
  return (
    <div className="mt-5">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-between w-full">
          {!Array.isArray(data) || data.length === 0 ? (
            <div className="text-2xl opacity-70 mt-10">
              No Recepies Found for <b>{search}</b>
              <br />
              <span className="text-sm tracking-widest">
                Try to search different recepies...
              </span>
            </div>
          ) : (
            <>
              <div className="recepie grid gap-6 grid-col w-full lg:hidden  md:grid-cols-2 md:justify-center">
                {data.map((item) => (
                  <div key={item.id}>
                    <Recepie
                      item={item}
                      setSelectedRecepie={setSelectedRecepie}
                      setViewmore={setViewmore}
                    />
                  </div>
                ))}
              </div>
              {/* ------------------------------------------------------------------ */}
              <div className="hidden lg:block w-full">
                <div className=" flex w-full">
                <div className="recepie grid gap-6 grid-row w-full grid-cols-3">
                  {firstsix.map((item) => (
                    <div key={item.id}>
                      <Recepie
                        item={item}
                        setSelectedRecepie={setSelectedRecepie}
                        setViewmore={setViewmore}
                      />
                    </div>
                  ))}
                </div>
                <div className="sidepage hidden lg:inline-block h-[300px] w-[30%] ml-10">
                  <div className="flex w-full flex-col items-center">
                    <h1 className="text-3xl text-center mb-5 font-semibold">
                      Popular Recepie
                    </h1>
                    {<Popularrecepie />}
                    <h1 className="text-3xl text-center mb-5 mt-10 font-semibold">
                      Indian Recepie
                    </h1>
                    {<Popularindianrecepie />}
                  </div>
                </div>
                </div>
                <div className="recepie grid gap-6 grid-row w-full grid-cols-4 mt-10">
                  {remaining.map((item) => (
                    <div key={item.id}>
                      <Recepie
                        item={item}
                        setSelectedRecepie={setSelectedRecepie}
                        setViewmore={setViewmore}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
