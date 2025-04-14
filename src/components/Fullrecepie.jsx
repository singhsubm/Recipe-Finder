import { useDispatch, useSelector } from "react-redux";
import { setViewMore } from "../redux/slices/features/viewMore";

export default function Fullrecepie() {
  const dispatch = useDispatch();
  const { selectedRecepie } = useSelector((state) => state.selectedRecepie);
  return (
    <div className="w-full p-5">
      <button
        onClick={() => dispatch(setViewMore(false))}
        className="mb-5 text-xl bg-[#ffebb3] px-4 py-2 rounded text-black font-semibold"
      >
        Close
      </button>
      <div className="md:flex md:justify-around">
        <div className="md:w-1/3">
          <h1 className="text-5xl font-bold mb-4">{selectedRecepie.strMeal}</h1>
          <p className="mt-3">
            <span className="font-bold">Category:-</span>{" "}
            {selectedRecepie.strCategory}
          </p>
          <p>
            <span className="font-bold">Area:-</span> {selectedRecepie.strArea}
          </p>
        </div>
        <div>
          <img
            src={selectedRecepie.strMealThumb}
            alt=""
            className="w-full max-w-[400px] mx-auto mt-4 mb-4 rounded-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5">
            {Array.from({ length: 20 }, (_, i) => {
              const ing = selectedRecepie[`strIngredient${i + 1}`];
              const measure = selectedRecepie[`strMeasure${i + 1}`];
              return ing && ing.trim() !== "" ? (
                <li key={i}>{`${ing} - ${measure}`}</li>
              ) : null;
            })}
          </ul>
        </div>
      </div>
      <p className="mt-4">{selectedRecepie.strInstructions?.split('\n').map((line,index)=> (
        <>
        <span key={index}>{line}</span>
        <br />
        </>
      ))}</p>
    </div>
  );
}
