
import AvailableItems from "./AvailableItem/AvailableItem";

export default function Main({foodItems}) {
  return (
    <>
      <section className="w-[1320px] mx-auto mt-[100px]">
        <div className="w-[823px] mx-auto text-center">
          <h2 className="text-[#150B2B] capitalize text-[40px] font-semibold">
            our recipes
          </h2>
          <p className="text-[#150b2b99] text-base font-normal capitalize mt-6">
            Taste our restaurant's delicious cuisine, a flavorful adventure from
            start to finish. Indulge in fresh ingredients and expertly crafted
            dishes.
          </p>
        </div>
      </section>

      <section className="w-[1320px] mx-auto mt-12">
        <div className="grid grid-cols-[757px_514px] gap-x-6">
          <div className="grid grid-cols-[379px_379px] gap-x-6 gap-y-6">
            {/* <div className="w-[379px] border rounded-lg py-6 px-6 mr-6">
              <div className="w-[331px] h-[200px] rounded-lg border">
                <img src="" alt="" />
              </div>
              <div className="mt-6">
                <h3 className="text-[#282828] text-[20px] font-semibold capitalize">
                  Spaghetti Bolognese
                </h3>
                <p className="text-[#878787] capitalize text-base font-normal mt-4">
                  Classic Italian pasta dish with savory meat sauce
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-[#282828] capitalize text-lg font-medium">
                  Ingredients: 6
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
                  30 minutes
                </span>
                <span className="text-[#282828cc] text-base font-normal capitalize ml-[22px]">
                  <FontAwesomeIcon icon={faBurn} className="mr-2" />
                  600 calories
                </span>
              </div>
              <div>
                <button className="text-[#150B2B] text-lg font-medium py-3 px-6 bg-[#0BE58A] rounded-full mt-6 hover:border hover:border-[#0BE58A] hover:bg-transparent hover:text-[#0BE58A] hover:transition-all hover:duration-500 hover:ease-in-out">
                  want to cook
                </button>
              </div>
            </div>
            <div className="w-[379px] border rounded-lg py-6 px-6">
              <div className="w-[331px] h-[200px] rounded-lg border">
                <img src="" alt="" />
              </div>
              <div className="mt-6">
                <h3 className="text-[#282828] text-[20px] font-semibold capitalize">
                  Spaghetti Bolognese
                </h3>
                <p className="text-[#878787] capitalize text-base font-normal mt-4">
                  Classic Italian pasta dish with savory meat sauce
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-[#282828] capitalize text-lg font-medium">
                  Ingredients: 6
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
                  30 minutes
                </span>
                <span className="text-[#282828cc] text-base font-normal capitalize ml-[22px]">
                  <FontAwesomeIcon icon={faBurn} className="mr-2" />
                  600 calories
                </span>
              </div>
              <div>
                <button className="text-[#150B2B] text-lg font-medium py-3 px-6 bg-[#0BE58A] rounded-full mt-6 hover:border hover:border-[#0BE58A] hover:bg-transparent hover:text-[#0BE58A] hover:transition-all hover:duration-500 hover:ease-in-out">
                  want to cook
                </button>
              </div>
            </div> */}
            {
              foodItems.map((value,index)=>{
                return <AvailableItems key={index} info={value}/>
              })
            }
          </div>

          <div className="border rounded-lg ml-6">
            <h2 className='text-[#282828] text-2xl font-semibold capitalize w-full mt-8 text-center after:content-"" after:table after:w-[80%] after:border after:mx-auto after:mt-4'>
              want to cook: 01
            </h2>
            <div className="mt-6 px-6">
              <table className="table">
                <thead className="text-[#878787] text-base font-medium capitalize">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>time</th>
                    <th>calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-[#282828b3] text-base font-normal">
                    <th className="text-[#282828cc] font-semibold">1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                    <td>
                        <button className="text-[#150B2B] text-base font-medium capitalize bg-[#0BE58A] py-[9x] px-[18px] rounded-full hover:border-[#0BE58A] hover:border hover:text-[#0BE58A] hover:transition-all hover:duration-500 hover:ease-in-out hover:bg-transparent">preparing</button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2 className='text-[#282828] text-2xl font-semibold capitalize w-full mt-8 text-center after:content-"" after:table after:w-[80%] after:border after:mx-auto after:mt-4'>
                currently cooking:02
              </h2>

              <table className="table">
                <thead className="text-[#878787] text-base font-medium capitalize">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>time</th>
                    <th>calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-[#282828b3] text-base font-normal">
                    <th className="text-[#282828cc] font-semibold">1</th>
                    <td>Chicken Caesar Salad</td>
                    <td>20 minutes</td>
                    <td>400 calories</td>
                  </tr>
                  <tr className="text-[#282828cc] font-semibold text-base">
                    <td></td>
                    <td></td>
                    <td>
                      total time = 45 minutes
                    </td>
                    <td>
                      total calories = 1050 calories
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
