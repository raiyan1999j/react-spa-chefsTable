import { useEffect, useState } from "react";
import Header from "./Components/HeaderArea/Header";
import Main from "./Components/MainArea/Main";
import Toast from "./Components/Toast/Toast";

export default function App(){
  const [items,setItems] = useState([]);
  const [condition,setCondition] = useState(false);

  useEffect(()=>{
    async function loadAllItems(){
      const api = await fetch('../public/blogs.json');
      const json= await api.json();

      setItems(json);
    }

    loadAllItems();
  },[]);

  const toastCondition =(value)=>{
    setCondition(value);
  }
  return(
    <>
      <div className="max-w-[1600px] mx-auto font-lexend">
        <Header/>
        <Main 
        foodItems={items}
        conditionToast={(value)=>{toastCondition(value)}}
        />
        {
          condition?<Toast conditionToast={(value)=>{toastCondition(value)}}/>:""
        }
      </div>
    </>
  )
}