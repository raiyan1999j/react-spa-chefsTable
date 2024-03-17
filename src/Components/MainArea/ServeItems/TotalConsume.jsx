export default function TotalConsume({ info }) {

    let count = info.reduce((acc,current)=>{
        acc.calorie += current.calories;
        acc.time += Number(current.time.replace(/\D/g, ""));

        return acc;
    },{calorie:0,time:0});

  return (
    <>
      <tr className="text-[#282828cc] font-semibold text-base">
        <td></td>
        <td></td>
        <td>total time = {count.time}</td>
        <td>total calories = {count.calorie}</td>
      </tr>
    </>
  );
}
