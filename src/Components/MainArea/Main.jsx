import { useState } from "react";
import AvailableItems from "./AvailableItem/AvailableItem";
import OrderItems from "./ServeItems/OrderItems";
import PrepareItems from "./ServeItems/PrepareItems";
import TotalConsume from "./ServeItems/TotalConsume";

export default function Main({ foodItems,conditionToast }) {
  const [itemsArr, setArr] = useState([]);
  const [prepare,setPrepare]= useState([]);
  const [consume,setConsume]= useState([]);
  

  const orderToAdd = (info) => {
    if(itemsArr.map(value=>value?.id).includes(info.id)){
      conditionToast(true);
    }else{
      setArr(value=>[...value,info])
    }
  };

  const removeItem=(identifier)=>{
    let copy = [...itemsArr];

    let arr = copy.filter((val)=>{
      return val.id !== identifier
    })

    let wrap ={
      time: foodItems[identifier].preparingTime,
      calories:foodItems[identifier].calories
    }

    setPrepare(val=>[...val,foodItems[identifier]]);
    setConsume(val=>[...val,wrap]);
    setArr(arr);
  }
  return (
    <>
      <section className="w-[1320px] mx-auto mt-[100px] small:w-[475.2px] medium:w-[633.6px]">
        <div className="w-[823px] mx-auto text-center small:w-[450px] medium:w-[550px]">
          <h2 className="text-[#150B2B] capitalize text-[40px] font-semibold small:text-[26px] medium:text-[32px]">
            our recipes
          </h2>
          <p className="text-[#150b2b99] text-base font-normal capitalize mt-6 small:text-xs medium:text-base">
            Taste our restaurant's delicious cuisine, a flavorful adventure from
            start to finish. Indulge in fresh ingredients and expertly crafted
            dishes.
          </p>
        </div>
      </section>

      <section className="w-[1320px] mx-auto mt-12 small:w-[475.2px] medium:w-[633.6px]">
        <div className="grid grid-cols-[757px_514px] gap-x-6 small:grid-cols-1 small:gap-y-6 medium:grid-cols-1 medium:gap-y-6">
          <div className="grid grid-cols-[379px_379px] gap-x-6 gap-y-6 small:grid-cols-1 medium:grid-cols-1">
            {foodItems.map((value, index) => {
              return <AvailableItems 
              key={index} 
              id={index} 
              info={value}
              addToOrder={(value)=>{orderToAdd(value)}}
               />;
            })}
          </div>

          <div className="border rounded-lg ml-6 small:ml-0 medium:ml-0">
            <h2 className='text-[#282828] text-2xl font-semibold capitalize w-full mt-8 text-center after:content-"" after:table after:w-[80%] after:border after:mx-auto after:mt-4'>
              want to cook: {itemsArr.length}
            </h2>
            <div className="mt-6 px-6">
              <table className="table">
                <thead className="text-[#878787] text-base font-medium capitalize">
                  <tr>
                    <th className="px-3 py-3"></th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">time</th>
                    <th className="px-3 py-3">calories</th>
                    <th className="px-3 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    itemsArr.map((value,index)=>{
                      return <OrderItems 
                      key={index} 
                      info={value} 
                      serial={index+1}
                      itemRemove={(value)=>{removeItem(value)}}
                      />
                    })
                  }
                </tbody>
              </table>

              <h2 className='text-[#282828] text-2xl font-semibold capitalize w-full mt-8 text-center after:content-"" after:table after:w-[80%] after:border after:mx-auto after:mt-4'>
                currently cooking: {prepare.length}
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
                  {
                    prepare.map((value,index)=>{
                      return <PrepareItems 
                      key={index}
                      info={value}
                      serial={index + 1}
                      />
                    })
                  }
                  {
                    <TotalConsume info={consume}/>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
