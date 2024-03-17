
export default function OrderItems({info,serial,itemRemove}){

    const itemSelect=()=>{
        itemRemove(info.id);
    }
    return(
        <>
            <tr className="text-[#282828b3] text-base font-normal">
                    <th className="text-[#282828cc] font-semibold">
                        {serial}
                    </th>
                    <td>{info.name}</td>
                    <td>{info.time}</td>
                    <td>{info.calories}</td>
                    <td>
                        <button className="text-[#150B2B] text-base font-medium capitalize bg-[#0BE58A] py-[9x] px-[18px] rounded-full hover:border-[#0BE58A] hover:border hover:text-[#0BE58A] hover:transition-all hover:duration-500 hover:ease-in-out hover:bg-transparent" onClick={itemSelect}>preparing</button>
                    </td>
                  </tr>
        </>
    )
}