import { useEffect, useState } from "react";
import Header from "./Components/HeaderArea/Header";
import Main from "./Components/MainArea/Main";

export default function App(){
  const [items,setItems] = useState([]);

  useEffect(()=>{
    async function loadAllItems(){
      const api = await fetch('../public/blogs.json');
      const json= await api.json();

      setItems(json);
    }

    loadAllItems();
  },[])
  return(
    <>
      <div className="max-w-[1600px] mx-auto font-lexend">
        <Header/>
        <Main foodItems={items}/>
      </div>
    </>
  )
}