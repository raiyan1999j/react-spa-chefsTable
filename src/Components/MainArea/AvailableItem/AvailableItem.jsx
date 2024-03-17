import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurn, faClock } from "@fortawesome/free-solid-svg-icons";

export default function AvailableItems({info,id,addToOrder}){

    const addItem=()=>{
      let wrap={
        id:id,
        name:info.recipeName,
        time:info.preparingTime,
        calories:info.calories
      }

      addToOrder(wrap);
    }
    return(
        <>
            <div className="border rounded-lg py-6 px-6">
              <div className="w-[331px] h-[200px] rounded-lg border">
                <img src={info.recipeImage} alt={info.recipeName} className="h-full w-full object-cover rounded-lg" />
              </div>
              <div className="mt-6">
                <h3 className="text-[#282828] text-[20px] font-semibold capitalize">
                  {info.recipeName}
                </h3>
                <p className="text-[#878787] capitalize text-base font-normal mt-4">
                  {info.shortDescription}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-[#282828] capitalize text-lg font-medium">
                  Ingredients: {info.ingredients.length}
                </h3>
                <ul className="mt-4 text-[#878787] capitalize text-lg font-normal list-disc pl-8">
                  <li>500g ground beef</li>
                  <li>1 onion, chopped</li>
                  <li>2 cloves garlic, minced</li>
                </ul>
              </div>
              <div className="flex flex-row mt-6">
                <span className="text-[#282828cc] text-base font-normal capitalize">
                  <FontAwesomeIcon icon={faClock} className="mr-2" />
                  {info.preparingTime}
                </span>
                <span className="text-[#282828cc] text-base font-normal capitalize ml-[22px]">
                  <FontAwesomeIcon icon={faBurn} className="mr-2" />
                  {info.calories}
                </span>
              </div>
              <div>
                <button className="text-[#150B2B] text-lg font-medium py-3 px-6 bg-[#0BE58A] rounded-full mt-6 hover:border hover:border-[#0BE58A] hover:bg-transparent hover:text-[#0BE58A] hover:transition-all hover:duration-500 hover:ease-in-out" onClick={addItem}>
                  want to cook
                </button>
              </div>
            </div>
        </>
    )
}